/**
 * @author E.K.Jithendiran
 * @date 14.06.2023
 */

const net = require('net');
const { open } = require('fs/promises');
const { existsSync, mkdirSync } = require('fs');
const { port } = require('../constants');

const UPLOAD_FOLDER = 'storage';
const server = net.createServer(() => { });

// const clients = []
// let file = null;
// let writeStream = null;

server.on('connection', async (socket) => {
    let detail = { file: null, writeStream: null }
    console.log(`User : ${socket.remoteAddress} - ${socket.remotePort} New Connection Established...!`);
    // clients.push({ id: `${socket.remoteAddress}-${socket.remotePort}`, file: null, writeStream: null })
    // Method 1
    // socket.on('data', async (data) => {
    //     writeStream.write(data);
    // });

    // Method 2
    // socket.pipe(writeStream); // drain, pause, resume are automatically handled 
    // socket.on('data', async (data) => {
    //     // console.log("Received : ", data.length);
    // });

    //Method 3
    socket.on('data', async (chunk) => {
        // const detail = clients.find(ele => ele.id === `${socket.remoteAddress}-${socket.remotePort}`);
        if (!detail.file || !detail.writeStream) {
            socket.pause();
            if (!existsSync(UPLOAD_FOLDER)) {
                mkdirSync(UPLOAD_FOLDER);
            }
            const data = JSON.parse(chunk);
            console.log(`File Name : ${data.fileName} \nSize :${data.size} Bytes`);
            detail.file = await open(`${UPLOAD_FOLDER}/${data.fileName}`, 'w');
            detail.writeStream = detail.file.createWriteStream();
            socket.resume();

            detail.writeStream.on('drain', async () => {
                socket.resume();
            });


        } else if (detail.file && detail.writeStream) {
            if (!detail.writeStream.write(chunk)) socket.pause();
        }
    });
    // Method 3 end

    //close file 
    socket.on('end', () => {
        // const detail = clients.find(ele => ele.id === `${socket.remoteAddress}-${socket.remotePort}`);

        console.log(`Connection ended ${socket.remoteAddress} - ${socket.remotePort}.....`);
        if (detail.writeStream)
            detail.writeStream.end();
        if (detail.file)
            detail.file.close();
        detail.file = null;
        detail.writeStream = null;
        // socket.end(); // no need because if client closed server connection also closed for that client
    })
})
server.listen(port, "::1", () => console.log('Server Running Details : ', server.address()));