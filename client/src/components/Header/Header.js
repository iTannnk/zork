import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div classname="header-container">
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
