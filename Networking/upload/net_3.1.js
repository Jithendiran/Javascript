/**
 * @author E.K.Jithendiran
 * @date 14.06.2023
 */

// This will make connection with server (net_3.js)

const net = require('net');
const path = require('path');
const { open, stat } = require('fs/promises');
const { port } = require('../constants');

const clearLine = () => {
    return new Promise((resolve, reject) => {
        process.stdout.clearLine(0, () => {
            resolve();
        })
    });
}

const moveCursor = (x, y) => {
    return new Promise((resolve, reject) => {
        process.stdout.moveCursor(x, y, () => {
            resolve();
        })
    });
}

const moveAndClear = async (x = 0, y = -1) => {
    await moveCursor(0, -1);
    await clearLine();
}

const socket = net.createConnection(
    {
        host: "::1", // server host  
        port: port  // server port
    }, async () => {
        let i = 0;
        console.log("Connected to server");
        if (process.argv.length <= 2) {
            throw new Error("Specify Upload File...");
        }
        const filePath = process.argv[process.argv.length - 1];
        // console.log(filePath);
        let file = await open(filePath, 'r');
        const { size } = await stat(filePath);
        socket.write(JSON.stringify({ fileName: path.basename(filePath), size: size }));
        let readStream = file.createReadStream();
        const total = Math.ceil(size / readStream.readableHighWaterMark)
        // Method 1
        // readStream.on('data', (data) => {
        //     socket.write(data);
        // })

        //Method 2
        readStream.pipe(socket);
        readStream.on('data', async (data) => {
            ++i;
            await moveAndClear();
            console.log(`Uploaded : ${Math.floor((i / total) * 100)} %`);
        })
        readStream.on('end', () => {
            console.log("File Uploaded..");
            readStream.close();
            file.close();
            file = null;
            readStream = null;
            socket.end();
        })
    }
);