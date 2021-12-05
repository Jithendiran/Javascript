/**
 * Documenter   : Jithendiran
 * Date         : 17-11-2021
 */
const http = require('http')
let count = 0


const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write("Hi from backend ")
        res.write("hii ") // count + 1

    }
    else if (req.url === '/jith') {
        res.write("JIth ") // count + 1
    }

    //console.log(req)

    res.end("ended") // after this count + 1
    count++;
    console.log("Response sent " + count);
})

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log("Listening......");
})


const server1 = http.createServer()

server1.on('request',(req,res)=>{
    res.end("INside server2")
})

server1.listen(9000)