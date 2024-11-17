import React from "react";
import Home from "./Home"; // Correct import paths
import About from "./About"; // Correct import paths

function App() {
  const user = {
    name: "Liza", // Changed 'username' to 'name' for consistency
    city: "New York",
    bio: "I am a passionate web developer.",
    github: "https://github.com/liza",
    linkedin: "https://linkedin.com/in/liza",
  };

  return (
    <div>
      <Home name={user.name} city={user.city} color="firebrick" />{" "}
      {/* Pass color if needed */}
      <About
        bio={user.bio}
        github={user.github}
        linkedin={user.linkedin}
      />{" "}
      {/* Make sure About uses Links if required */}
    </div>
  );
}

export default App;
