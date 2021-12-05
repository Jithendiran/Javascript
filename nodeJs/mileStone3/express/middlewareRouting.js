/**
 * Documenter   : Jithendiran
 * Date         : 18-11-2021
 */

 const express = require('express')
 const path = require('path')
 const app = express()

//to use routing concepts in middle ware
const middleware = (req, res, next) => {
    //if the url is /api/data
    //it consider the url from /data 
    console.log("Inside middle ware");
    console.log(req.url);
    next()
}

app.use('/api',middleware)//the middleware execute only with '/api' url

app.get('/',(req,res)=>{
    console.log("Inside home");
    res.send("Home")
})
/*
O/p
Listening......
http://localhost:3000/
Inside home
*/
app.get('/about',(req,res)=>{
    console.log("Inside about");
    res.send("About")
})
/*
O/p
Listening......
http://localhost:3000/
Inside about
*/
app.get('/api',(req,res)=>{
    console.log("Inside api");
    res.send("Api")
})
/*
O/p
Listening......
http://localhost:3000/
Inside middle ware
/
Inside api
*/

app.get('/api/data',(req,res)=>{
    console.log("Inside api data");
    console.log(req.url);
    res.send("Api data")
})
/*
O/p
Listening......
http://localhost:3000/
Inside middle ware
/data
Inside api data
/api/data

*/

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Listening......");
    console.log(`http://localhost:${port}/`);
})
