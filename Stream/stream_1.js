/**
 * @author E.K.Jithendiran
 * @date 10.06.2023
 */
const fs = require('node:fs/promises');

// (async () => {
//     console.time("wr");
//     const file = await fs.open('tmp.txt', "w");
//     for (let index = 0; index < 1000000; index++) {
//         await file.writeFile(` ${index} `);
//     }
//     console.timeEnd("wr");
// })();
// 30s

// (async () => {
//     console.time("wrbf");
//     const file = await fs.open('tmp.txt', "w");
//     const buffer = Buffer.from('a');
//     for (let index = 0; index < 1000000; index++) {
//         buffer.write(` ${index} `);
//         await file.writeFile(buffer);
//     }
//     console.timeEnd("wrbf");
// })();
//30s

// (async () => {
//     console.time("stream");
//     const file = await fs.open('tmp.txt', "w");
//     const stream = file.createWriteStream();
//     const buffer = Buffer.from('a');
//     for (let index = 0; index < 1000000; index++) {
//         buffer.write(` ${index} `);
//         await stream.write(buffer);
//     }
//     console.timeEnd("stream");
// })();
// 438.709ms (Streams too fast)

// createWriteStream 
// By default stream will have buffer size of 16384 Bytes when the buffer is fuilled it will do write operation
// when we have data size is more than it's buffer size that remaining will be stored on RAM after the stream is writed
// new value from RAM is filled the cycle continous if we continously write and the size of the RAM will be higher
// so we need to write to stream when the data in stream buffer is drained (writed)

// (async () => {
//     console.time("stream");
//     let index = 0;
//     const limit = 1000000;
//     const file = await fs.open('tmp.txt', "w");
//     const stream = file.createWriteStream();
//     const writeStream = (index, limit) => {
//         while (index < limit) {
//             if (index === limit - 1) {
//                 stream.end(` ${index} `);
//             } else if (!stream.write(` ${index} `)) {
//                 break;
//             }

//             index++;
//         }
//         return index;
//     }

//     index = writeStream(index, limit);
//     stream.on('drain', () => {
//         console.log(`Write on : ${index}`);
//         index = writeStream(index, limit);
//     });

//     stream.on('finish', () => {
//         console.log(`Completed : ${index}`);
//         file.close();
//         console.timeEnd("stream");
//     });

// })();

(async () => {
    console.time("stream");
    let index = 0;
    const limit = 1000000;
    const file = await fs.open('tmp.txt', "w");
    const stream = file.createWriteStream();
    const writeStream = (index, limit) => {
        // let buffer = '';
        while (index < limit) {
            buffer = Buffer.from(` ${index} `, "utf-8");
            if (index === limit - 1) {
                stream.end(buffer);
            } else if (!stream.write(buffer)) {
                break;
            }

            index++;
        }
        return index;
    }

    index = writeStream(index, limit);
    stream.on('drain', () => {
        console.log(`Write on : ${index}`);
        index = writeStream(index, limit);
    });

    stream.on('finish', () => {
        console.log(`Completed : ${index}`);
        file.close();
        console.timeEnd("stream");
    });

})();

/**
 * 4 Types of stream in Node
 *  Readable
 *         - This will only read the content default buffer size 64KiB
 *  Writeable
 *         - It will only able to write content default buffer size 16KiB
 *  Duplex 
 *         - It has two seprate buffer for reading and writting each buffer for seprate file
 *  Transform
 *         - It is extended version of Duplex It has two buffer for read and write. It will read content from source and write to it's writting buffer 
 */