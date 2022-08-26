// DEPENDENCIES
const express = require("express");
const songsController = require("./controllers/songController");

// CONFIGURATION
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
})

app.get("*", (req, res) => {
  res.status(404).send("404 Error, Page not found!")
})

// EXPORT
module.exports = app;