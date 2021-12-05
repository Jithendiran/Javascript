/**
 * Documenter   : Jithendiran
 * Date         : 17-11-2021
 */
//reading a big file require streams

const fs = require('fs')
//fs.readFile just for smaller files
const stream = fs.createReadStream('./big.txt')//optional parameter for encoding , chage buffer size

let data = ''

stream.on('data', (res) => {
    console.log(res); //default buffer size is 64KB
    /*
    O/p
    <Buffer 68 65 6c 6c 6f 20 31 20 0a 68 65 6c 6c 6f 20 30 20 0a 68 65 6c 6c 6f 20 34 20 0a 68 65 6c 6c 6f 20 33 20 0a 68 65 6c 6c 6f 20 35 20 0a 68 65 6c 6c 6f ... 65486 more bytes>
<Buffer 20 0a 68 65 6c 6c 6f 20 35 35 35 34 20 0a 68 65 6c 6c 6f 20 35 35 35 36 20 0a 68 65 6c 6c 6f 20 35 35 35 35 20 0a 68 65 6c 6c 6f 20 35 35 35 37 20 0a ... 53304 more bytes>
    */
    data += res; //so we append each time
})

stream.on('end',()=>{
    console.log((data));
})

stream.on('error', (err) => {
    console.log(err);
})