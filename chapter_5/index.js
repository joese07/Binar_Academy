const express = require("express");
const alert = require("alert");

const path = require("path");
let errors = [];

const app = express();
const port = 8080;
const users = require("./data");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/chapter_3", (req, res) => {
  res.render("chapter_tiga");
});

app.get("/chapter_4", (req, res) => {
  res.render("chapter_empat");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const { nama, email, password } = req.body;

  const lastId = users[users.length - 1].id;
  const newId = lastId + 1;

  const user = {
    id: newId,
    nama: nama,
    email: email,
    password: password,
  };

  users.push(user);

  console.log(users);

  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const emailData = users.map((e) => e.email);
  const passwordData = users.map((e) => e.password);

  if (email == emailData && password == passwordData) {
    alert("login berhasil");
    res.redirect("/");
  } else {
    alert("salah nih email atau passwordnya");
    res.redirect("/login");
  }
});

app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});
