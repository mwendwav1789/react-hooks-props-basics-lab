import React from "react";
import Home from "./Home"; // Correct import paths
import About from "./About";
import Links from "./Links";

function App() {
  const user = {
    username: "Liza",
    city: "New York",
    bio: "I am a passionate web developer.",
    github: "https://github.com/liza",
    linkedin: "https://linkedin.com/in/liza",
  };

  return (
    <div>
      <Home username={user.username} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
