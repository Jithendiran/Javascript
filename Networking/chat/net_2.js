/**
 * @author E.K.Jithendiran
 * @date 13.06.2023
 */

// In this type of connection client connection is alive until user client close
const net = require('net');
const { host, port } = require('../constants');

const clientSockets = [];
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        clientSockets.forEach(async (element) => {
            element.write(JSON.stringify({
                user: `${socket.remoteAddress} - ${socket.remotePort}`,
                msg: data.toString("utf-8"),
                isSelf: element.remotePort === socket.remotePort // if in production compare with (element.remoteAddress === socket.remoteAddress && lement.remotePort === socket.remotePort)
            })); // This will send message to particular client
        })
    });

    socket.on('end', () => {
        const index = clientSockets.findIndex(ele => (socket.remotePort === ele.remotePort && socket.remoteAddress === ele.remoteAddress));
        index >= 0 && clientSockets.splice(index, 1);
        clientSockets.forEach(async (element) => {
            element.write(JSON.stringify({ user: `${socket.remoteAddress} - ${socket.remotePort}`, isServer: true, isLeave: true })); // This will send message to particular client
        })
        console.log(`Client ${`${socket.remoteAddress} - ${socket.remotePort}`} Disconnected\n`);
    })

});

server.on('connection', (socket) => {
    clientSockets.forEach(async (element) => {
        if (element.remotePort !== socket.remotePort)
            element.write(JSON.stringify({ user: `${socket.remoteAddress} - ${socket.remotePort}`, isServer: true, isUserJoined: true })); // This will send message to particular client
    })

    // console.log('REMOTE Socket is IP4/IP6 : ' + socket.remoteFamily);

    // console.log(socket);
    console.log(`Client ${socket.remoteAddress} - ${socket.remotePort} Connected\n`);
    clientSockets.push(socket);
    socket.write(JSON.stringify({ isServer: true, user: `${socket.remoteAddress} - ${socket.remotePort}` }))
})
server.listen(port, host, () => console.log('Server Running Details : ', server.address()));