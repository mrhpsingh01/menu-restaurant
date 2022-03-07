import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
// import Menu from "./Menu";

function Home() {
  return (
    <div
      className="w-full h-[100vh] flex justify-center items-start flex-col bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-auto ml-12">
        <div className="justify-center items-center text-8xl font-bold text-yellow-800 pb-8">
          Bada Borgir
        </div>
        <div className="p-0 text-4xl font-thin text-black pb-4">
          Get the Hot Borgirs with Hand baked Buns
        </div>
        <Link to="/menu">
          <button class="group text-4xl text-black hover:text-green-500 transition ease-in-out duration-200 font-bold">
            Order Now
            <span
              aria-hidden="true"
              class="inline-block font-medium translate-x-0 group-hover:translate-x-10 transition-transform ease-in-out duration-200"
            >
              →
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
