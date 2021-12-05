/**
 * Documenter   : Jithendiran
 * Date         : 18-11-2021
 */
const express = require("express");
const path = require("path");
const track = require("./routes/track");
const data = require("./routes/data");

const app = express();
const PORT = process.env.PORT || 3000;

//url that start with following are rotued to the following file

app.use((req, res, next) => {
  console.log("Inside Middleware root 1st");
  console.log(req.url);
  next();
});
app.use("/track", track);
app.use("/data", data);

app.use((req, res, next) => {
  console.log("Inside Middleware root");
  next();
});

//root
app.get("/", (req, res) => {
  res.send("From root");
});
/*
O/p

Server Started
http://localhost:3000/
Inside Middleware root 1st
/
Inside Middleware root

*/

app.listen(PORT, () => {
  console.log("Server Started");
  console.log(`http://localhost:${PORT}/`);
});
