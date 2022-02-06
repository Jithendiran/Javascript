const WS = require('ws')
const express = require('express')
const app = express()
const path = require('path')
const PORT = 9876

app.use('/',express.static(path.resolve(__dirname,'../client/')))


const server = app.listen(PORT)

const ws = new WS.Server(
    {
        server:server,
        verifyClient:(info)=>{
            //console.log(info);
            return true
        }
    },
    () => console.log(`Web Socket run in port : ${PORT}`)
)

ws.on('connection', (wsm)=>{//connection established for once
    wsm.send("connection established ... ")

    console.log("Hello from server");
    wsm.on('message',(msg)=>{//when get a message from client
        //console.log("Message from client : ",msg.toString());
        wsm.send(msg.toString())
    })
})

// server.on('upgrade',(req,socket,head)=>{
//     //here the socket is regular socket not a websocket
//     console.log("upgrade");

//     //test for auth
//     //if use is authendicated
//     // if(Math.random() >0.5){
//     //     return socket.end('HTTP/1.1 401 Unauthorized\r\n','ascii')
//     // }
//     ws.handleUpgrade(req,socket,head,()=>{
//         ws.emit('connection',ws,req,...args)
//     })
//     //else 
// })