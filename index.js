require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();

const comicsRoute = require("./Routes/comics");
const charactersRoute = require("./Routes/characters");

app.use(cors());
app.use(comicsRoute);
app.use(charactersRoute);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Ooops , are you lost ?" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is now online /!\\");
});
