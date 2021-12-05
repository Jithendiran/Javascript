/**
 * Documenter : Jithendiran
 * Date       : 02-11-2021
 * 
 * Convert callBack to promise
 */

const https = require('https')
const url = "https://reqres.in/api/users?page=2";

/** 
 *  using callBack
https.get(url, res => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    });
    res.on('end', () => {
        data = JSON.parse(data);
        console.log(data);
    })
}).on('error', err => {
    console.log(err.message);
})

*/
//convert to promise
const promise = new Promise((resolve, reject) => {
    https.get(url, res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            data = JSON.parse(data);
            resolve(data);
        })
    }).on('error', err => {
        reject(err)
    })
})

promise
    .then(res => console.log(res))
    .catch(rej => console.log(rej))