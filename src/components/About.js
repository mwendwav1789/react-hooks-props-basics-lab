import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        {bio && <p>{bio}</p>}
        <Links github={github} />
      </p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {}
    </div>
  );
}

export default About;
