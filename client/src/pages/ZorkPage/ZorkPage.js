import "./ZorkPage.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Zork() {
  const [theZork, setTheZork] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getTheZork();
  }, []);

  async function getTheZork() {
    try {
      const API = `http://localhost:8080/zorks?_id=${id}`;
      const res = await axios.get(API);
      setTheZork(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container zork-page-div">
      <h3>Zork Number: {theZork.zork}</h3>
      <p>message: {theZork.message}</p>
      <p>option1: {theZork.option1}</p>
      <p>option2: {theZork.option2}</p>
      <p>option3: {theZork.option3}</p>
      <p>outcome1: Zork Number - {theZork.outcome1}</p>
      <p>outcome2: Zork Number - {theZork.outcome2}</p>
      <p>outcome3: Zork Number - {theZork.outcome3}</p>
      <Link to="/admin">
        <p>&#8592; List_all_Zorks</p>
      </Link>
    </div>
  );
}
