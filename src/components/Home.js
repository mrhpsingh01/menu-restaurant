import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import "../styles/Home.css";
import Menu from "./Menu";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>Bada Borgir</h1>
        <p>Get the Hot Borgirs with Hand baked Buns</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
