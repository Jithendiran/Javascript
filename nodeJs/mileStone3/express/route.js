/**
 * Documenter   : Jithendiran
 * Date         : 18-11-2021
 */
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

//single url for both methods

app
  .route("/data/cars")
  .get((req, res) => {
    res.send("Inside Get");
  })
  .post((req, res) => {
    res.send("Inside Post");
  });

app.listen(PORT, () => {
  console.log("Server Started");
  console.log(`http://localhost:${PORT}/`);
});

/**
 * "/abc" - handles /abc
 * "/ab?cd" - handles /acd or /abcd
 * "/ab+cd" - handles /abcd, /abbbcd, /abbbbbbbcd, etc
 * "/ab*cd" - "/ab" + anything + "cd"
 * /a/ - RegExp: anything that contains "a"
 * /.*man$/ - RegExp: anything that ends with "man"
 *
 */
