import { useState } from "react";
import "./Home.css";

import axios from "axios";

export default function Home() {
  const [zork, setZork] = useState({
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

  async function getZork(param) {
    const API = `http://localhost:8080/zorks?zork=${param}`;
    const res = await axios.get(API);
    console.log(res.data[0]);
    setZork(res.data[0]);
  }

  return (
    <main>
      <div className="home-main-container container">
        <h2>{zork.message}</h2>
        <button onClick={() => getZork(zork.outcome1)}>{zork.option1}</button>
        <button onClick={() => getZork(zork.outcome2)}>{zork.option2}</button>
        <button onClick={() => getZork(zork.outcome3)}>{zork.option3}</button>
      </div>
    </main>
  );
}
