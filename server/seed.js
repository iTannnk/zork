const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Zork = require("./models/zork");

async function seed() {
  await Zork.create({
    id: 1,
    message: "Welcome to Zork!",
    option1:
      "You awake in a field there is a house to your north and a forest to your west, there is also a small mailbox",
    option2: "You go to the house in the north",
    option3: "You check the mailbox",
    outcome1: 2,
    outcome2: 3,
    outcome3: 4,
  });
  await Zork.create({
    id: 1,
    message: "You win the game",
    option1: "blah blah blah yiddy yidday yah! -chris",
    option2: "hippedity skip doo",
    option3: "Snoopy doggy dog",
    outcome1: 2,
    outcome2: 3,
    outcome3: 4,
  });
  console.log("create the books");
  mongoose.disconnect();
}

seed();
