/**
 * Documenter   : Jithendiran
 * Date         : 17-11-2021
 */

const http = require('http')
const fs   = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(fs.readFileSync('./home.html'))
        res.end()
    }
    if(req.url === '/image.jpg') res.end(fs.readFileSync('./image.jpg')) // this is static file 
    //in image src has './image.jpg' this is request to the server if we don't handle them it will not work 
    //every static file request want to handle 
    
})

server.listen(8080,()=>{
    console.log("Server Started...");
})