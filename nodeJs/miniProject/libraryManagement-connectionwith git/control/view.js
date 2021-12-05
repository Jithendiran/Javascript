const express = require("express");
const model = require("../model/model");

const route = express.Router();

route.use(express.urlencoded());
route.use(express.json());

route.get("/author", async (req, res) => {
  try {
    if (req.session.userId) {
      if (req.query.id) {
        return res.json(JSON.parse(await model.viewAuthor(req.query.id)));
      }

      return res.json(JSON.parse(await model.viewAuthor()));
    } else {
      throw new Error("NO user login");
    }
  } catch (error) {
    return res.json({
      success: false,
      msg: `Error in viewing author : ${error}`,
    });
  }
});

/**
 * find book for logged author (if mine is given in query)
 * find book for specific user (if id is given in query)
 * find book for all author
 *
 */
route.get("/book", async (req, res) => {
  try {
    if (req.session.userId) {
      if (req.query.mine == "yes") {
        return res.json(JSON.parse(await model.viewBook(req.session.userId)));
      }
      if (req.query.id) {
        return res.json(JSON.parse(await model.viewBook(req.query.id)));
      }

      return res.json(JSON.parse(await model.viewBook()));
    } else {
      throw new Error("NO user login");
    }
  } catch (error) {
    return res.json({
      success: false,
      msg: `Error in viewing book : ${error}`,
    });
  }
});

module.exports = route;
