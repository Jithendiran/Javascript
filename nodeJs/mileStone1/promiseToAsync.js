/**
 * Documenter : Jithendiran
 * Date       : 02-11-2021
 * 
 * Convert promise to async
 */
const https = require('https')
const url = "https://reqres.in/api/users?page=2";


const promise = new Promise((resolve, reject) => {
    https.get(url, res => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            resolve(data)
        })
    }).on('error', err => {
        reject(err)
    })
})

const fun = async () => {
    try {

        let res = await promise
        res = await JSON.parse(res)
        console.log(res);

    } catch (error) {
        console.log("Error in " + error);
    }

}

fun()