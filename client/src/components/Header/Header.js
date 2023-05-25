import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <Link to="/">
          <h1 className="header-title">ZORK</h1>
        </Link>
        <nav className="header-nav">
          <ul className="header-list">
            <Link className="header-link" to="/">
              <li className="header-list-item">Home</li>
            </Link>
            <span className="link-divider">/</span>
            <Link className="header-link" to="/about">
              <li className="header-list-item">About</li>
            </Link>
            <span className="link-divider">/</span>
            <Link className="header-link" to="/admin">
              <li className="header-list-item">Admin</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
