/**
 * @author E.K.Jithendiran
 * @date 15.06.2023
 */
const dgram = require('dgram');
const { port } = require('../constants');

// UDP is very fast but it is connection less
// It will send packet and it not mind the connection is opened or not
// there is no guarentee for packet transmission 

const client = dgram.createSocket('udp6');

client.send("Hi mesg", port + 1, "::1", (err, sendBytes) => {
    if (err) console.log("Error : ", err);
    else console.log("Sent Bytes : ", sendBytes);
})