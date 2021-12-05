/**
 * Documenter : Jithendiran
 * Date       : 20-11-2021
 */
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

// app.use(cors()); //it can enable
/*
Access-Control-Allow-Origin : *
*/
//default
/*
{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
*/

const corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.options('*', cors()) // include all methods like[get,post,delete,patch,..]


app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for http://localhost:3000/.'})
})

app.get('/',(req,res)=>{
  res.send("Success")
})

app.listen(port, () => {
  console.log("Listening......");
  console.log(`http://localhost:${port}/`);
});
