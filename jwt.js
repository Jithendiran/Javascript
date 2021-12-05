const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3000;
const secretkey = "secretkey";

app.use(express.urlencoded());
app.use(express.json());


const verifyJWT = (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader) {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      const token = bearerToken;
      const vf = jwt.verify(token, secretkey);
      if (vf) {
        console.log(vf);
      }
      next();
    } else {
      return res.sendStatus(403);
    }
  } catch (error) {
    
    res.send(error);
  }
};

app.post("/posts", verifyJWT, (req, res) => {
  res.send("Logined");
});

app.post("/login", (req, res) => {
  console.log("in login");
  //sample user
  const payload = {
    id: 1,
    username: "aaa",
    email: "aa@gmail.com",
  };

  jwt.sign({ payload }, secretkey, { expiresIn: "30s" }, (err, token) => {
      if(err){
          return res.send(err)
      }
    console.log(`Token : ${token}`);
    return res.send(token);
  });
});

app.get("/", (req, res) => {
  console.log("in home");
  res.redirect("/");
});

app.listen(PORT, () => console.log(`Listening in : http://localhost:${PORT}`));
