/**
 * Documenter   : Jithendiran
 * Date         : 18-11-2021
 */

const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Inside Middleware track");
  console.log(req.url);
  next();
});

//root
router.get("/", (req, res) => {
  res.send("From root track");
});

/*
O/p

Server Started
http://localhost:3000/
Inside Middleware root 1st
/track
Inside Middleware track
/

*/

router.get("/data", (req, res) => {
  res.send("from track data");
});
/*
O/p

Server Started
http://localhost:3000/
Inside Middleware root 1st
/track/data
Inside Middleware track
/data


*/

module.exports = router;
