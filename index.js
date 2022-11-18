require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();

const comicsRoute = require("./Routes/comics");
const charactersRoute = require("./Routes/characters");

app.use(cors());
app.use(comicsRoute);
app.use(charactersRoute);

app.listen(3000, () => {
  console.log("Server is now online /!\\");
});
