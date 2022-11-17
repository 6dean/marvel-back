const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=E5BWawWIebCEK7gT`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: message });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=E5BWawWIebCEK7gT`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: message });
  }
});

module.exports = router;
