/**
 * @author E.K.Jithendiran
 * @date 12.06.2023
 */

const fs = require("fs");
const { Writable } = require("stream");

class FileWriteable extends Writable {

    constructor(fileName, options) {
        console.log("IN construct");
        super(options);
        this.chunk = [];
        this.writenlength = 0;
        this.fileName = fileName;
        this.fileDisclosure = null;
    }

    // This function will call after constructor is involked
    _construct(callback) {
        console.log("IN _construct");
        fs.open(this.fileName, "w", (err, fd) => {
            if (err) {
                // if argument means it will be error
                callback(err);
                // don't try to emit this.emit('error') it will cause problem
                // All event emit are handle by parent class
            } else {
                this.fileDisclosure = fd;
                // if no arguments means no error
                callback();
            }
        });
    }

    /**
     * This function will write chunks to file
     * @param {Function} callback 
     */
    writeStream(callback) {
        fs.write(this.fileDisclosure, Buffer.concat(this.chunk), (err) => {
            if (err) {
                callback(err);
            } else {
                this.chunk = [];
                this.writenlength = 0;
                return;
            }
        })
    }

    /**
     * This function will called when FileWriteable.write('') is called
     * Don't try to implement write() method directly it will leads to error
     * @param {Buffer} chunk data to written 
     * @param {string} encoding encoding of data 
     * @param {Function} callback 
     */
    _write(chunk, encoding, callback) {
        console.log("IN write");
        if (chunk.length + this.writenlength > this.writableHighWaterMark) {
            if (this.writenlength > this.writableHighWaterMark) {
                // already filled
                //this.writeStream(callback);
                fs.write(this.fileDisclosure, Buffer.concat(this.chunk), (err) => {
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
                // const chunkString = chunk.toString();
                // has some space fill the reaminig space
                const reaminingLength = this.writableHighWaterMark - this.writenlength;
                this.chunk.push(chunk.subarray(0, reaminingLength));
                this.writenlength += reaminingLength;
                // this.writeStream(callback);

                fs.write(this.fileDisclosure, Buffer.concat(this.chunk), (err) => {
                    if (err) {
                        callback(err);
                    } else {
                        this.chunk = [];
                        // buffer the overflow chuk data to array
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
        // this.chunk.push(chunk);
        // this.writeStream(callback);
    }

    /**
     * This function will call when FileWriteable.end('') is called
     * end call flow 1. _write, 2._final 
     * @param {Function} callback callback function
     */
    _final(callback) {
        console.log("In Final");
        // this.writeStream(callback);
        fs.write(this.fileDisclosure, Buffer.concat(this.chunk), (err) => {
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
        console.log("In destroy");
        if (this.fileDisclosure) {
            fs.close(this.fileDisclosure, (err) => {
                callback(err || error);
            })
        } else if (error) {
            callback(error)
        } else {
            callback();
        }
    }
}

// const fileWriteStream = new FileWriteable('./text.txt');
// for (let index = 0; index < 10000; index++) {
//     fileWriteStream.write(` ${index} `);
// }
// fileWriteStream.end();

// more efficient
(async () => {
    console.time("stream");
    let index = 0;
    const limit = 10000;
    const stream = new FileWriteable('./text.txt');
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

    index = writeStream(index, limit);
    stream.on('drain', () => {
        console.log(`Write on : ${index}`);
        index = writeStream(index, limit);
    });

    stream.on('finish', () => {
        console.log(`Completed : ${index}`);
        console.timeEnd("stream");
    });

})();