import "./Admin.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Zork from "../../components/Zork/Zork";

export default function Admin() {
  const [allZorks, setAllZorks] = useState([]);

  useEffect(() => {
    getAllZorks();
  }, []);

  async function getAllZorks() {
    const API = `https://zork-server.onrender.com/zorks`;
    const res = await axios.get(API);
    setAllZorks(res.data);
  }

  async function deleteZork(id) {
    try {
      const API = `https://zork-server.onrender.com/zorks/${id}`;
      console.log(API);
      await axios.delete(API);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="admin">
      <div className="admin-container container">
        <form className="zork-form">
          <label>
            Zork Number
            <input type="number" />
          </label>
          <label>
            zork message
            <input type="text" />
          </label>
          <label>
            option 1
            <input type="text" />
          </label>
          <label>
            option 2
            <input type="text" />
          </label>
          <label>
            option 3
            <input type="text" />
          </label>
          <label>
            outcome 1
            <input type="number" />
          </label>
          <label>
            outcome 2
            <input type="number" />
          </label>
          <label>
            outcome 3
            <input type="number" />
          </label>
        </form>
        <h2>
          <span className="git">&#8594;</span> List_of_all_zorks{" "}
          <span className="git">git:(main)</span> code .
        </h2>
        <div className="zork-list">
          {allZorks.map((zork) => {
            return (
              <Zork
                key={zork._id}
                id={zork._id}
                zorkNumber={zork.zork}
                message={zork.message}
                option1={zork.option1}
                option2={zork.option2}
                option3={zork.option3}
                outcome1={zork.outcome1}
                outcome2={zork.outcome2}
                outcome3={zork.outcome3}
                deleteZork={deleteZork}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
