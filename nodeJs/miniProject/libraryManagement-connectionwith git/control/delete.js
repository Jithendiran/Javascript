const express = require("express");
const route = express.Router();
const model = require("../model/model");

route.use(express.urlencoded());
route.use(express.json());

route.delete("/author", async (req, res) => {
  try {
    if (req.session.userId) {
      return res.json(await model.deleteAuthor(req.session.userId));
      //res.redirect('/')
    } else {
      throw new Error(`NO login`);
    }
  } catch (error) {
    res.json({
      success: false,
      msg: `Error in delete author : ${error}`,
    });
  }
});

route.delete("/book", async (req, res) => {
  try {
    if (req.session.userId) {
      if (req.body.id) {
        res.json(await model.deleteBook(req.body.id));
      } else {
        throw new Error("NO id");
      }
    } else {
      throw new Error(`NO login`);
    }
  } catch (error) {
    res.json({
      success: false,
      msg: `Error in delete book : ${error}`,
    });
  }
});

module.exports = route;
