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

//Get request -get a specific zork from the database using request.params

app.get("/zorks/:id", async (request, response) => {
  try {
    const theZork = await Zork.find({ id: request.params.id });
    return response.status(200).json(theZork);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

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

//put request -edit an existing zork in the database with request.params and request.body

app.put("/zorks/:id", async (request, response) => {
  try {
    const updatedZork = await Zork.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    return response.status(200).json(updatedZork);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

//this is delete request to delete an existing zork by using a request.params
app.delete("/zorks/:id", async (request, response) => {
  try {
    const deletedZork = await Zork.findByIdAndDelete(request.params.id);
    return response.status(200).json(deletedZork);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
