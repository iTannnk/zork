const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Zork = require("./models/zork");

async function seed() {
  await Zork.create({
    zork: 1,
    message:
      "One sunday morning. The warm sun came up and POP! Out of the egg came a tiny and very hungry catterpillar",
    option1:
      "Next to the caterpillar he finds his dead mother he proceed to eat his mother's body as his only source of sustanance",
    option2:
      "He refuses to be a cannibal to his own mother and wanders out into the wild!",
    option3: "He is lazy to do both and just dies",
    outcome1: 2,
    outcome2: 3,
    outcome3: 4,
  });
  await Zork.create({
    zork: 2,
    message:
      "The caterpillar after finishing his first meal sleeps it off as its quite heavy and double in size when he wakes up!",
    option1:
      "With his new size he feels more confident and wonders off into the wild",
    option2: "Just outside his home he spots an apple",
    option3:
      "He realised he ate too much and his bowels imploded due to a lack of fibre rip",
    outcome1: 2,
    outcome2: 3,
    outcome3: 4,
  });
  console.log("create the books");
  mongoose.disconnect();
}

seed();
