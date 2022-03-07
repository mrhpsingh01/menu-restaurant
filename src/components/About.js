import React from "react";
import aboutImage from "../assets/banner-01.jpg";

function About() {
  return (
    <div className="w-full h-[90vh] flex flex-col bg-[#fcfbfa]">
      <div
        className="w-full h-[45%] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${aboutImage})` }}
      ></div>
      <div className="flex flex-col h-[55%] items-center mt-20">
        <div className="text-4xl font-bold text-yellow-800 h-8 flex justify-center -translate-y-10">
          <div className="relative after:absolute after:bg-green-500 after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            About Us
          </div>
        </div>
        <div className="text-xl w-[1200px] text-center">
          Working on making best Burger Franchise in the World.
          <br /> We are opened in 72 Countries.
          <br />
          Selling the best burgers around the world.
        </div>
      </div>
    </div>
  );
}

export default About;
