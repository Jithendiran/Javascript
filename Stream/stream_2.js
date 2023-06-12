/**
 * @author E.K.Jithendiran
 * @date 12.06.2023
 */
const fs = require('node:fs/promises');
const { pipeline } = require('node:stream/promises');

// // createReadStream
// (async () => {
//     const dstFile = await fs.open('tmp.js', "w");
//     const srcFile = await fs.open('stream_video.js', "r");

//     // Default Buffer size of read is 64KiB
//     const readStream = srcFile.createReadStream();
//     // Default Buffer size of write is 16KiB
//     const writeStream = dstFile.createWriteStream();

//     // we can change buffer size if needed

//     // It will triggered when every time buffer is filled in read stream
//     readStream.on('data', (chunk) => {

//         if (!writeStream.write(chunk)) {
//             // when buffer of write stream is fulled need to wait for some time to drain (write)
//             // so we need to pause the read untill write stream is complete it's writting
//             readStream.pause();
//         }
//     });

//     // It will triggered when File read is completed
//     readStream.on('end', (chunk) => {
//         console.log("Read Completed");
//         writeStream.end();
//         srcFile.close();
//     });

//     // triggered when write stream drained it's buffer 
//     writeStream.on('drain', () => {
//         // read will be resumed
//         readStream.resume();
//     });

//     writeStream.on('finish', () => {
//         console.log("Write completed");
//         dstFile.close();
//     })
// })();

// When we use pipe it automatically read, pause, resume
const pipe = async () => {
    console.time("pipe");
    const dstFile = await fs.open('tmp.js', "w");
    const srcFile = await fs.open('stream_video.js', "r");

    // Default Buffer size of read is 64KiB
    const readStream = srcFile.createReadStream();
    // Default Buffer size of write is 16KiB
    const writeStream = dstFile.createWriteStream();

    // pipe is faster and memory efficient
    // if any error is happened while copying we need to again pipe the stream manually
    readStream.pipe(writeStream);

    // chaining is also possible
    //readStream.pipe(writeStream).pipe(gZip).pipe(..);

    readStream.on('end', () => {
        readStream.unpipe(writeStream)
        console.timeEnd("pipe");
    });
}
// pipe();

const pipelineFunc = async () => {
    // pipeline will automatically clean and destror stream when error is happened
    // chaining is also easy
    console.time("pipeline");
    const dstFile = await fs.open('tmp.js', "w");
    const srcFile = await fs.open('stream_video.js', "r");

    const readStream = srcFile.createReadStream();
    const writeStream = dstFile.createWriteStream();

    try {
        await pipeline(readStream, writeStream);
    } catch (error) {
        console.log(error);
    }
    // transform chaining 
    //pipeline(readStream, t1, t2,..., writeStream);
    console.timeEnd("pipeline");

    // check stream.finished function too
}
pipelineFunc();