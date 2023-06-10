/**
 * @author E.K.Jithendiran
 * @date 09.06.2023
 */

const { stat } = require('fs/promises');
const { createServer } = require('http');
const { createReadStream, createWriteStream } = require('fs');

const PORT = 3000;

const sendVideo = async (req, res) => {
    const file = '/mnt/Backup/The_Dark_Knight_Trilogy.mp4';
    const { size } = await stat(file);

    const range = req.headers.range;
    console.log(`Range : ${range}`);

    if (range) {
        // send when user time line the video
        let [start, end] = range.replace(/bytes=/, '').split('-');
        start = parseInt(start, 10);
        end = end ? parseInt(end, 10) : size - 1;

        res.writeHead(206, {
            'Accept-Ranges': 'bytes',
            'Content-Type': 'video/mp4',
            'Content-Length': (start - end) + 1,
            'Content-Range': `bytes ${start}-${end}/${size}`,
        });
        return createReadStream(file, { start, end }).pipe(res);
    } else {
        // send full video
        res.writeHead(200, {
            'Content-Length': size,
            'Content-Type': 'video/mp4'
        });
        return createReadStream(file).pipe(res);
    }
}

const upload = async (req, res) => {

}

createServer(async (req, res) => {
    if (req.url == '/video') {
        sendVideo(req, res);
    } else if (req.url === '/upload') {
        if (req.method.toLowerCase() === 'get') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
            <form enctype="multipart/form-data" action="/upload" method="post">
                <input type="file" name="upload" >
                <button>Upload</button>
            </form>
            `);
        } else if (req.method.toLowerCase() === 'post') {
            // req.pipe(process.stdout);
            req.pipe(createWriteStream('./file.mp4'))
            // await upload(req, res);
            res.writeHead(200);
            res.end('Uploaded');
        }
    }
})
    .listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));