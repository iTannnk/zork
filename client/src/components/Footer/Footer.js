import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <h3>
          The world is your <span className="line-through">oyster</span>{" "}
          caccoon!
        </h3>
        <iframe
          title="caterpillar"
          className="caterpillar"
          src="https://embed.lottiefiles.com/animation/63847"
        ></iframe>
        <iframe
          title="apple"
          className="apple"
          src="https://embed.lottiefiles.com/animation/73679"
        ></iframe>
      </div>
    </footer>
  );
}
