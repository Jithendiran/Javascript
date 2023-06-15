/**
 * @author E.K.Jithendiran
 * @date 15.06.2023
 */
const dgram = require('dgram');
const { port } = require('../constants');

// UDP is very fast but it is connection less
// It will send packet and it not mind the connection is opened or not
// there is no guarentee for packet transmission 

const sevrer = dgram.createSocket('udp6');

sevrer.on('message', (msg, remoteInfo) => {
    console.log(`User : ${remoteInfo.address} - ${remoteInfo.port}`);
    console.log(msg.toString('utf-8'));
});

sevrer.bind({ port: port + 1, host: "::1" });

sevrer.on('listening', (socket) => {
    console.log(`UDP Listening...`, sevrer.address());
});