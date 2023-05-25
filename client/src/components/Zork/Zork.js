import React from "react";
import "./Zork.css";

import { Link } from "react-router-dom";

export default function Zork({
  zorkNumber,
  message,
  option1,
  option2,
  option3,
  outcome1,
  outcome2,
  outcome3,
  id,
  deleteZork,
}) {
  return (
    <div className="individual-zork">
      <h3>
        <Link className="zork-page-link" to={`/zork/${id}`}>
          Zork Number: {zorkNumber}
        </Link>
      </h3>
      <p>message: {message}</p>
      <p>option1: {option1}</p>
      <p>option2: {option2}</p>
      <p>option3: {option3}</p>
      <p>outcome1: Zork Number - {outcome1}</p>
      <p>outcome2: Zork Number - {outcome2}</p>
      <p>outcome3: Zork Number - {outcome3}</p>
      {/* <button className="delete-zork" onClick={() => deleteZork(id)}>
        delete zork
      </button> */}
      <button className="delete-zork">delete zork</button>
    </div>
  );
}
