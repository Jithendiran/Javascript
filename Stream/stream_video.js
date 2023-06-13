/**
 * @author E.K.Jithendiran
 * @date 09.06.2023
 */

const { stat, readFile } = require('fs/promises');
const { createServer } = require('http');
const { createReadStream, createWriteStream } = require('fs');

const PORT = 3000;
const Folder = '/home/jifocus/Documents/video'

const sendVideo = async (req, res) => {
    const path = req.url.split("/");
    if (path.length === 2) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(await readFile('video.html'));
    }
    const name = (path.length > 2 ? `/${path[2].split('?')[0]}.mp4` : `/1.mp4`)
    const file = Folder + name;
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
    req.pipe(createWriteStream('./file.mp4'))
    // await upload(req, res);
    res.writeHead(200);
    res.end('Uploaded');
}

createServer(async (req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(await readFile('video.html'));
    } else
        if (req.url.startsWith('/video')) {
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
                await upload(req, res);
            }
        }
})
    .listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));