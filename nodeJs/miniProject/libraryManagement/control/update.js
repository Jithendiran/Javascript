const express = require("express");
const model = require("../model/model");

const route = express.Router();

route.use(express.urlencoded());
route.use(express.json());

route.put("/author", async (req, res) => {
  try {
    if (req.session.userId) {
      const detail = {};
      //res.send(req.body);

      for (i in req.body) {
        if (i == "userName" || i == "email" || i == "pasword") {
          detail[i] = req.body[i];
        }
      }

      return res.json(await model.updateAuthor(req.session.userId, detail));
    } else {
      throw new Error("NO login");
    }
  } catch (error) {
    return res.json({
      success: false,
      msg: `Error in updating author : ${error}`,
    });
  }
});

route.put("/book", async (req, res) => {
  try {
    if (req.session.userId) {
      const detail = { authorId: req.session.userId };
      if (req.body.name && req.body.id) {
        detail["name"] = req.body.name;
        detail["bookId"] = req.body.id;
      } else {
        throw new Error("in sufficient data");
      }
      return res.json(await model.updateBook(detail));
    } else {
      throw new Error("NO login");
    }
  } catch (error) {
    return res.json({
      success: false,
      msg: `Error in updating book : ${error}`,
    });
  }
});

module.exports = route;
