const express = require("express");
const model = require("../model/model");
const verify = require("../control/verifyEmail");
const hash = require("../control/hashPassword");
const session = require("express-session");
const app = express();
const view = require("../control/view");
const update = require("../control/update");
const deleteDb = require("../control/delete");
const axios = require("axios");
const { json } = require("sequelize/dist");
const gitUser = require("../model/gituser");
require("dotenv").config({ path: "../.env" });

const CLIENTID = process.env.CLIENTID;
const SECRETKEY = process.env.SECRETKEY;
const PORT = process.env.PORT || 3000;

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

  // (async () => {
  //   try {
  //     req.session.email = email;
  //     req.session.name = name;
  //     req.session.password = password;

  //     req.session.otp = await verify.sendMail("jidesh0410@gmail.com");
  //     res.send("Link sent to mail : " + email);
  //   } catch (error) {
  //     return res.json({
  //       success: false,
  //       msg: `Error in email verification : ${error}`,
  //     });
  //   }
  // })();

  res.json(
    await model.addAuthor({ name: name, email: email, password: password })
  );
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

async function getAccessToken({ code, CLIENTID, SECRETKEY }) {
  try {
    const request = await axios
      .post(
        "https://github.com/login/oauth/access_token",
        { 
          client_id: CLIENTID, 
          client_secret: SECRETKEY, 
          code: code,
          scope: [ 'user:email' ] // fetches non-public emails as well 
        },
        {
          headers: { accept: "application/json" },
        }
      )
      .then((res) => res.data);
    const params = new URLSearchParams(request);
    return params.get("access_token");
  } catch (er) {
    console.log("ERROR : get ::" + er);
  }
}

async function fetchGitHubUser(token) {
//curl -H "Authorization: token ghu_ZTZE7YEfG9b09lfy7Jc4PJTSc3CqrN00uJN4" https://api.github.com/user

  try {
    console.log(`Token : ${token}`);
    const request = await axios.get("https://api.github.com/user",{
      headers: {
        Authorization:`token ${token}`,
        accept: "application/json"
      },
    });
    return request.data;

  } catch (error) {
    console.log(`ERROR : Fetch :: ${error}`);
  }
}

app.get("/login/github/", (req, res) => {
  const redirect_uri = `http://localhost:${PORT}/login/github/callback`;
  const url = `https://github.com/login/oauth/authorize?client_id=${CLIENTID}&redirect_url=${redirect_uri}`;
  res.redirect(url);
});

app.get("/login/github/callback", async (req, res) => {
  const code = req.query.code;
  console.log(`CODE : ${code}`);
  const access_token = await getAccessToken({ code, CLIENTID, SECRETKEY });
  console.log(`Access Token : ${access_token}`);
  const user = await fetchGitHubUser(access_token);
  console.log(user);
  if (user) {
    res.json(user);
    
    //if user id is not in gituser db then add it and login
    if(! await gitUser.findByPk(user.id)){
      //add user 
    }
    req.session.userId = user.id
  
  } else {
    res.send("Login did not succeed!");
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

app.listen(PORT, () => console.log(`Listening in : http://localhost:${PORT}/`));
// app.listen(3000, () => console.log(`Listening in : http://localhost:${PORT}/`));

module.exports = app;
