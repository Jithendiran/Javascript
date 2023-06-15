/**
 * @author E.K.Jithendiran
 * @date 13.06.2023
 */

// net module is the very lowest level of nettwoking module
// http is on top of the net module

const net = require('net');
const { host, port } = require('./constants');

const server = net.createServer((socket) => {
    // socket is an TCP
    // socket is an duplex stream

    socket.on('data', (data) => {
        console.log(data.toString());
        socket.write("Received");
    });

    socket.on('end', () => {
        console.log("Data readed");
    })
});

server.on('connection', (socket) => {
    console.log("Connected");
})
server.listen(port, host, () => console.log('Server Running Details : ', server.address()));