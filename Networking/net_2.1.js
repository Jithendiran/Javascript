/**
 * @author E.K.Jithendiran
 * @date 13.06.2023
 */

// This will make connection with server (net_1.js)

const net = require('net');
const readline = require('readline/promises');
const { host, port } = require('./constants');
const { exit } = require('process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// can create n number of client by running the program in many terminal

// OS will allocate dynamic port for client process

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

const ask = async () => {
    const msg = await rl.question("Leave a msg >: ");
    await moveAndClear(0, -1);
    socket.write(msg);
}

const socket = net.createConnection(
    {
        host: host, // server host  
        port: port  // server port
    }, async () => {
        console.log("Connected to server");
        await ask();
    }
);

socket.on('data', async (data) => {
    console.log();
    await moveAndClear(0, -1);
    data = JSON.parse(data);
    if (data?.isServer) {
        if (data?.isUserJoined)
            console.log(`User Joined : ${data.user}`);
        else if (data?.isLeave)
            console.log(`User Leave : ${data.user}`);
        else
            console.log(`Your Name : ${data.user}`);
    } else {
        if (data.isSelf)
            console.log(`${data.msg}`);
        else
            console.log(`> ${data.user}: ${data.msg}`);
    }
    await ask();
});

socket.on('end', async () => {
    console.log();
    await moveAndClear(0, -1);
    console.log("Connection ended ");
    exit();
})