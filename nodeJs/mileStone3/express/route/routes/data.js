/**
 * Documenter   : Jithendiran
 * Date         : 18-11-2021
 */

const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Inside Middleware data");
  console.log(req.url);
  next();
});

//root
router.get("/", (req, res) => {
  res.send("From root data");
});
/*
O/p

Server Started
http://localhost:3000/
Inside Middleware root 1st
/data
Inside Middleware data
/

*/

router.get("/preview", (req, res) => {
  res.send("from data preview");
});
/*
O/p

http://localhost:3000/
Inside Middleware root 1st
/data/preview
Inside Middleware data
/preview


*/

module.exports = router;
