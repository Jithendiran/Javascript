/**
 * @author E.K.Jithendiran
 * @date 12.06.2023
 */
const fs = require('fs');
const fsPromise = require('fs/promises');
const { Transform, Duplex } = require('stream');

// Duplex
class customDuplex extends Duplex {
    constructor(readFile, writeFile, options) {
        super(options);
        this.rfd = null;
        this.wfd = null;
        this.chunk = [];
        this.writenlength = 0;
        this.readFile = readFile;
        this.writeFile = writeFile;
    }

    // This function will call after constructor is involked
    _construct(callback) {
        fs.open(this.readFile, "r", (err, fd) => {
            if (err) {
                callback(err);
            } else {
                this.rfd = fd;
                fs.open(this.writeFile, "w", (err, fd) => {
                    if (err) {
                        callback(err);
                    } else {
                        this.wfd = fd;
                        callback();
                    }
                });
            }
        })
    }

    /**
     * This will call when FileRead.read() is called
     * @param {bytes} size bytes to read
     */
    _read(size) {
        const buffer = Buffer.alloc(size);
        fs.read(this.rfd, buffer, 0, size, null, (err, bytesRead) => {
            if (err) {
                this.destroy(err);
            } else {
                this.push(bytesRead > 0 ? buffer.subarray(0, bytesRead) : null);
            }
        });
    }

    /**
     * This function will called when FileWriteable.write('') is called
     * Don't try to implement write() method directly it will leads to error
     * @param {Buffer} chunk data to written 
     * @param {string} encoding encoding of data 
     * @param {Function} callback 
     */
    _write(chunk, encoding, callback) {
        if (chunk.length + this.writenlength > this.writableHighWaterMark) {
            if (this.writenlength > this.writableHighWaterMark) {
                fs.write(this.wfd, Buffer.concat(this.chunk), (err) => {
                    if (err) {
                        callback(err);
                    } else {
                        this.chunk = [];
                        this.chunk.push(chunk);
                        this.writenlength = chunk.length;
                        callback();
                    }
                })

            } else {
                const reaminingLength = this.writableHighWaterMark - this.writenlength;
                this.chunk.push(chunk.subarray(0, reaminingLength));
                this.writenlength += reaminingLength;
                fs.write(this.wfd, Buffer.concat(this.chunk), (err) => {
                    if (err) {
                        callback(err);
                    } else {
                        this.chunk = [];
                        this.chunk.push(chunk.subarray(reaminingLength));
                        this.writenlength = (chunk.length - reaminingLength);
                        callback();
                    }
                })

            }
        } else {
            this.chunk.push(chunk);
            this.writenlength += chunk.length;
            callback();
        }
    }

    /**
     * This function will call when FileWriteable.end('') is called
     * end call flow 1. _write, 2._final 
     * @param {Function} callback callback function
     */
    _final(callback) {
        fs.write(this.wfd, Buffer.concat(this.chunk), (err) => {
            if (err) {
                callback(err);
            } else {
                this.chunk = [];
                this.writenlength = 0;
                callback();
            }
        })
    }

    /**
     * This function will call after _final is executed
     * @param {Error} error 
     * @param {Function} callback 
     */
    _destroy(error, callback) {
        if (this.rfd && this.wfd) {
            fs.close(this.rfd, (err) => {
                if (err)
                    callback(err || error);
                else {
                    fs.close(this.wfd, (err) => {
                        if (err)
                            callback(err || error);
                        else
                            callback();
                    }
                    )
                }
            })
        } else if (error) {
            callback(error)
        } else {
            callback();
        }
    }

}

// more efficient
const efficient = async () => {
    console.time("stream");
    let index = 0;
    const limit = 10000;
    const stream = new customDuplex('stream_4.js', 'text.txt');
    const writeStream = (index, limit) => {
        // let buffer = '';
        while (index < limit) {
            buffer = Buffer.from(` ${index} `, "utf-8");
            if (index === limit - 1) {
                stream.end(buffer);
            } else if (!stream.write(buffer)) {
                break;
            }

            index++;
        }
        return index;
    }
    stream.read();
    stream.on('data', (chunk) => {
        console.log(chunk.toString());
    });

    stream.on('end', () => {
        console.log('Read Ended');
    })

    index = writeStream(index, limit);
    stream.on('drain', () => {
        console.log(`Write on : ${index}`);
        index = writeStream(index, limit);
    });

    stream.on('finish', () => {
        console.log(`Completed : ${index}`);
        console.timeEnd("stream");
    });

}
// efficient();

// Transform

class Encrypt extends Transform {
    _transform(chunk, encoding, callback) {
        // we can do operation by two either this.push or callback()

        // modify chunk here

        // this.push(chunk);
        callback(null, chunk);
    }
}

const transform = async () => {
    const wtFile = await fsPromise.open('sample.js', 'w');
    const rdFile = await fsPromise.open('stream_3.js', 'r');
    const readStream = rdFile.createReadStream();
    const writeStream = wtFile.createWriteStream();
    const encrypt = new Encrypt();
    readStream.pipe(encrypt).pipe(writeStream);
}
transform();