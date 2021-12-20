require('dotenv').config({path:'../.env'})
require("./config_database/database").connect();

const user_route = require('./routes/user_route');
const books_route = require('./routes/books_route');
const express = require("express");
const auth = require("./middleware/auth");
const app = express();

app.use(express.json({ limit: "50mb" }));

app.post("/register", user_route.register);

app.post("/login", user_route.login);

/* app.post("/books/create/", books_route.login);
app.post("/books/delete/:id", books_route.login); 
app.get("/books", books_route.login); */

app.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;