const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

const Zork = require("./models/zork");

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  return response.status(200).json("Ho HO Ho merry xmas!!");
});

//Get request -get all zorks

app.get("/zorks", async (request, response) => {
  try {
    const allZorks = await Zork.find(request.query);
    return response.status(200).json(allZorks);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

//Get request -get a specific zork from the database

//Post request -add new zork to database using request.body

app.post("/zorks", async (request, response) => {
  try {
    const newZork = await Zork.create(request.body);
    return response.status(200).json(newZork);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
