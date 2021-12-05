/**
 * Documenter   : Jithendiran
 * Date         : 19-11-2021
 */
const express = require("express");
const path = require("path");
const app = express();
const data = require('./route/data')
const port = process.env.PORT || 3000;

app.use('/data',data)

app.get('/',(req,res)=>{
    res.send("<h1>Home</h1>")
})

app.listen(port, () => {
  console.log("Listening......");
  console.log(`http://localhost:${port}/`);
});
