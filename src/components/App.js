import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


function App() 
  const user = {
    name: "Victor Mwendwa",
    bio: "Software developer with a love for open-source and collaboration.",
    github: "https://github.com/mwendwav1789",
  };

  return (
    <div>
      <Home name={user.name} />
      <About bio={user.bio} github={user.github} />
    </div>
  )
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
