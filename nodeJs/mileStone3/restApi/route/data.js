/**
 * Documenter   : Jithendiran
 * Date         : 19-11-2021
 */
const { application } = require("express");
const express = require("express");
const path = require("path");
const route = express.Router();

route.use(express.json());
//route.use(express.urlencoded({ extended: false }));

const data = [
  { id: 1, name: "aa", age: 21 },
  { id: 2, name: "bb", age: 21 },
  { id: 3, name: "cc", age: 20 },
  { id: 4, name: "dd", age: 19 },
  { id: 5, name: "aa", age: 20 },
  { id: 6, name: "aa", age: 18 },
  { id: 7, name: "aa", age: 21 },
];

const badRequest = (req, res) => {
  return res.status(req.code).send(`<h1>${req.msg}</h1>`);
};

//get the values

//get all the data
route.get("/", (req, res) => {
  return res.json(data);
});

//get specific data from id
route.get(
  "/id/:id",
  (req, res, next) => {
    const d = data.find((i) => i.id == req.params.id);
    if (d) {
      return res.json(d);
    } else {
      req.code = 404;
      req.msg = "Data Not found";
      return next();
    }
  },
  badRequest
);

//get specific data from name
route.get(
  "/name/:name",
  (req, res, next) => {
    let d = data.filter((i) => i.name == req.params.name);

    if (req.query.limit) {
      if (req.query.limit > -1) {
        d = d.slice(0, req.query.limit);
        return res.json(d);
      } else if (req.query.limit > d.length) {
        return res.json(d);
      } else {
        req.code = 400;
        req.msg = "Limit value must be positive";
        return next();
      }
    }

    if (d.length > 0) {
      return res.json(d);
    } else {
      req.code = 404;
      req.msg = "Data Not found";
      return next();
    }
  },
  badRequest
);

//post the new value
route.post(
  "/",
  (req, res, next) => {
    if (
      Object.keys(req.body).length === 2 &&
      req.body.hasOwnProperty("name") &&
      req.body.hasOwnProperty("age")
    ) {
      if (data.length > 0) {
        data.push({
          id: data[data.length - 1].id + 1,
          name: req.body.name,
          age: req.body.age,
        });
      } else {
        data.push({
          id: 1,
          name: req.body.name,
          age: req.body.age,
        });
      }
      res.json(data[data.length - 1]);
    } else {
      req.msg = "No value";
      req.code = 400;
      return next();
    }
  },
  badRequest
);

//update the value for given id
route.put(
  "/id/:id",
  (req, res, next) => {
    //console.log("Put");
    console.log(req.body);

    const id = data.findIndex((i) => i.id == req.params.id);
    console.log(id);
    if (id >= 0) {
      for (const key in req.body) {
        data[id][key] = req.body[key];
      }

      return res.json(data[id]);
    } else {
      req.code = 404;
      req.msg = "No Record found";
      return next();
    }
  },
  badRequest
);

//delete the value for the given id
route.delete(
  "/id/:id",
  (req, res, next) => {
    const d = data.findIndex((i) => i.id == req.params.id);

    if (d > -1) {
      console.log("to delete : ", d);
      data.splice(d, 1);
      return res.json(data);
    } else {
      req.code = 404;
      req.msg = "Data not found";
      return next();
    }
  },
  badRequest
);

module.exports = route;
