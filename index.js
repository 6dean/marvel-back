require("dotenv").config();
const express = require("express");
const app = express();

const comicsRoute = require("./Routes/comics");
const charactersRoute = require("./Routes/characters");

app.use(comicsRoute);
app.use(charactersRoute);

app.listen(3000, () => {
  console.log("Server is now online /!\\");
});
