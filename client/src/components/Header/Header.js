import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-container container">
        <h1>ZORK</h1>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
