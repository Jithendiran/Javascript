const express = require("express");
const model = require("../model/model");
const verify = require("../control/verifyEmail");
const hash = require("../control/hashPassword");
const session = require("express-session");
const app = express();
const view = require("../control/view");
const update = require("../control/update");
const deleteDb = require("../control/delete");
require("dotenv").config({ path: "../.env" });

app.use(express.urlencoded());
app.use(express.json());
app.use(
  session({ resave: true, saveUninitialized: true, secret: "secret-key" })
);

app.use("/view", view);
app.use("/update", update);
app.use("/delete", deleteDb);

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  (async () => {
    try {
      req.session.email = email;
      req.session.name = name;
      req.session.password = password;

      req.session.otp = await verify.sendMail("jidesh0410@gmail.com");
      res.send("Link sent to mail : " + email);
    } catch (error) {
      return res.json({
        success: false,
        msg: `Error in email verification : ${error}`,
      });
    }
  })();

  //res.json(await model.addAuthor({ name: name, email: email, password: password }))
});

app.get("/verify/:otp", async (req, res) => {
  try {
    if (req.session.otp == req.params.otp) {
      res.json(
        await model.addAuthor({
          name: req.session.name,
          email: req.session.email,
          password: req.session.password,
        })
      );

      req.session.destroy();
    } else {
      throw new Error("Fail otp verification");
    }
  } catch (error) {
    return res.json({
      success: false,
      msg: `Error in email verification and add author : ${error}`,
    });
  }
});

app.post("/login", async (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  const data = JSON.parse(await model.viewAuthor(id));
  if (hash.compareHash(password, data.password)) {
    req.session.userId = data.userId;
    return res.send(true);
  } else {
    return res.send(false);
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();

  res.redirect("/");
});

app.post("/book", async (req, res) => {
  try {
    if (req.session.userId) {
      return res.json(
        await model.addBook({
          authorUserId: req.session.userId,
          name: req.body.name,
        })
      );
    } else {
      throw new Error("NO login found");
    }
  } catch (error) {
    return res.json({ success: false, msg: `Error in add book : ${error}` });
  }
});

app.get("/", (req, res) => {
  res.send("Home");
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening in : http://localhost:${PORT}/`));
