// NavBar.js
import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"]; // Array of link names

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
