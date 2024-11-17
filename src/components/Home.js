// src/components/Home.js
import React from "react";

function Home({ name, city, color }) {
  return (
    <h1 style={{ color }}>
      {name} is a Web Developer from {city}
    </h1>
  );
}

export default Home; // Default export
