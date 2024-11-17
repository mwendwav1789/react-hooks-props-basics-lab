import React from "react";
import Links from "./Links"; // Adjust this if necessary

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio !== "" && <p>{bio}</p>} {/* Conditional rendering for bio */}
      <Links github={github} linkedin={linkedin} />{" "}
      {/* Pass the links to Links component */}
    </div>
  );
}

export default About;
