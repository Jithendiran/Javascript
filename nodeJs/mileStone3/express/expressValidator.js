/**
 * Documenter   : Jithendiran
 * Date         : 19-11-2021
 */
const express = require("express");
const { check, validationResult, checkSchema } = require("express-validator");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post(
  "/",
  [
    check("username").notEmpty().withMessage("Username maust have value"),
    check("password")
      .notEmpty()
      .withMessage("Password must contain value")
      .isLength({ min: 5, max: 16 })
      .withMessage("min value of pass 5 and max of 16"),
  ],
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error);
      return res.status(400).json({ error: error.array() });
    } else {
      return res.status(200).send("OK");
    }
  }
);

//custom validation
app.post(
  "/custom",
  [
    check("email").custom((value, { req }) => {
      //{req} is optional parameter

      //value has the value of email
      //req.body.email also has the value
      //checking statement
      const pattern = /(^[a-z]+)([0-9]+)@((gmail)|(mail)).((com)|(in))$/;
      if (pattern.test(value)) {
        return true;
      } else {
        throw new Error("Not Matched");
      }
    }),
  ],
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error);
      return res.status(400).json({ error: error.array() });
    } else {
      return res.status(200).send("OK");
    }
  }
);

//wildcard
app.post(
  "/addresses",
  [check("addresses.*.name").notEmpty(), check("addresses.*.number").isInt()],
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error);
      return res.status(400).json({ error: error.array() });
    } else {
      return res.status(200).send("OK");
    }
  }
);
/*
{
  "addresses": [
    { "name": "aa", "number": "500" },
    { "name": "", "number": "501" }
  ]
}
*/

app.post(
  "/user/:id/password",
  checkSchema({
    id: {
      // The location of the field, can be one or more of body, cookies, headers, params or query.
      // If omitted, all request locations will be checked
      in: ["params", "query"],
      errorMessage: "ID is wrong",
      isInt: true,
      // Sanitizers can go here as well
      toInt: true,
    },
    myCustomField: {
      // Custom validators
      custom: {
        options: (value, { req, location, path }) => {
          if (value === 2) {
            return true;
          } else {
            throw new Error("Error in custom validator");
          }
        },
      },
    },
  }),
  (req, res) => {
    // handle the request as usual

    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error);
      return res.status(400).json({ error: error.array() });
    } else {
      return res.status(200).send("OK");
    }
  }
);

app.listen(port, () => {
  console.log("Listening......");
  console.log(`http://localhost:${port}/`);
});
