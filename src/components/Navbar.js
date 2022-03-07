import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FBF8F1] text-red-500 body-font shadow-sm">
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center">
        {/* ::Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ReorderIcon />
        </button>
        {/* ::Navbar */}
        <nav className="hidden md:flex lg:w-2/5 flex-wrap items-center md:justify-start text-base tracking-wide justify-center ml-[30rem]">
          <Link to="/" className="mr-8 text-lg grow-0">
            <div className="relative after:absolute after:bg-green-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
              Home
            </div>
          </Link>

          <Link to="/menu" className="mr-8 text-lg grow-0">
            <div className="relative after:absolute after:bg-green-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
              Menu
            </div>
          </Link>

          <Link
            to="/"
            className=" md:ml-0 flex flex-shrink-0 lg:w-1/5 font-medium items-center text-gray-900 md:mb-0 grow pl-5 pr-5"
          >
            <div className="relative before:absolute before:bg-green-500 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
              <span className="relative">
                <div className="flex flex-row text-yellow-700 text-2xl text-center font-bold uppercase mx-auto">
                  <div className="my-auto">Bada</div>
                  <div>
                    <img
                      src={logo}
                      alt="logo1"
                      className="h-12 w-14 mx-auto px-1"
                    />
                  </div>
                  <div className="my-auto">Borgir</div>
                </div>
              </span>
            </div>
          </Link>

          <Link to="/about" className="ml-8 text-lg grow-0">
            <div className="relative after:absolute after:bg-green-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
              AboutUs
            </div>
          </Link>

          <Link to="/contact" className="ml-8 text-lg grow-0">
            <div className="relative after:absolute after:bg-green-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
              Contact
            </div>
          </Link>
        </nav>
        {/* ::Site logo and Name */}
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-green-500 text-center font-medium text-base uppercase">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-green-700"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-green-700"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-green-700"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-green-700"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
