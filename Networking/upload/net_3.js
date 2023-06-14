/**
 * @author E.K.Jithendiran
 * @date 14.06.2023
 */

const net = require('net');
const { open } = require('fs/promises');
const { port } = require('../constants');

const server = net.createServer(() => { });

server.on('connection', async (socket) => {
    const file = await open('storage/data.mkv', 'w');
    const writeStream = file.createWriteStream();
    console.log(`New Connection Established...!`);

    // Method 1
    // socket.on('data', async (data) => {
    //     writeStream.write(data);
    // });

    // Method 2
    socket.pipe(writeStream); // drain, pause, resume are automatically handled 
    socket.on('data', async (data) => {
        // console.log("Received : ", data.length);
    });

    //close file 
    socket.on('end', () => {
        console.log("Connection ended");
        writeStream.close();
        file.close();
        socket.end();
    })
})
server.listen(port, "::1", () => console.log('Server Running Details : ', server.address()));