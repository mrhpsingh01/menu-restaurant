import React from "react";
import aboutImage from "../assets/banner-01.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ratione
          nobis enim quos culpa rerum non repellendus harum quo, at et repellat
          odit laborum distinctio iste eos facilis autem hic!
        </p>
      </div>
    </div>
  );
}

export default About;
