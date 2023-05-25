import React from "react";
import "./About.css";

export default function About() {
  return (
    <main>
      <div className="about-main-container container">
        <h3>Welcome to my about page</h3>
        <p>
          Hello and welcome to my about page. My name is Daniel, and as of
          writing the about me page I am currently 23 years young. This is my
          website z0rk, heavily inspired by the game zork which was run on early
          terminals and is a basic text adventure game and my website design has
          followed this theme as such. This is a react application. It uses
          useEffect and axios. It also has its very own database, mongoDB which
          hosts a lot of the story which I have called zorks. MongoDB then
          connects to a server to update the website and allow new information
          to be passed to it and so the user on the front end can see and read
          what happens next.
        </p>
        <p>
          The story is just a bit of text appears and then you are given the
          choice of 3 options, those 3 options then link to another message
          which then 3 more options appear so on and so forth. This is where
          mongoDB was very handy and useful because it allowed me to store these
          in strings and easily read out like an Index where everything was and
          i could easily delete add and edit with the help of thunder client and
          mongoDB together.
        </p>
        <p>
          I have an admin page which lets users of the site add edit and delete
          zork messages and write their own story but given the time scale, i
          wasnt able to initiate an Auth0 login in prompt. I wanted to add an
          Auth0 login in prompt because it would enable secure access to the
          editing side of the front end site while on the website, which meant
          you could directly delete feature of the zork messages, hence the
          security i wouldnt like anyone being able to directly have the power
          to delete as they wish, as I've worked very hard to write the
          story/plot make everything fit together and not have anything
          overlapping and it would be a big waste of time if someone was to just
          log in and wipe everything.
        </p>
      </div>
    </main>
  );
}
