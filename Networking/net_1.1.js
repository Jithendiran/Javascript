/**
 * @author E.K.Jithendiran
 * @date 13.06.2023
 */

// This will make connection with server (net_1.js)

const net = require('net');
const { host, port } = require('./constants');

const socket = net.createConnection({ host: host, port: port }, () => {
    socket.write("Hi from 1.1");

    socket.on('data', (data) => {
        console.log(data.toString());
    });

});

socket.on('end', () => {
    console.log("Connection ended ");
})