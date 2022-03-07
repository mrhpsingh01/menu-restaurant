import React from "react";
import contactImage from "../assets/borgir.jpg";

function Contact() {
  return (
    <div className="w-full h-[90vh] flex">
      <div
        className="h-full basis-1/2 bg-center bg-no-repeat bg-cover border border-[#ffebbc]"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>
      <div className="h-full basis-1/2 flex flex-col justify-center">
        <div className="ml-7">
          <div className="font-thin text-5xl ">
            <div className="relative after:absolute after:bg-green-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
              Contact Us
            </div>
          </div>
        </div>
        <div className="p-8 bg-white lg:p-12 lg:col-span-3">
          <form action="" className="space-y-4">
            <div>
              <label className="sr-only" for="name">
                Name
              </label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label className="sr-only" for="name">
                Email
              </label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Email"
                type="text"
                id="name"
              />
            </div>

            <div>
              <label className="sr-only" for="message">
                Message
              </label>
              <textarea
                className="w-full p-3 text-sm border-[gray-200] rounded-lg"
                placeholder="Message"
                rows="7"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="mt-10 w-36 h-10 border-none  text-[#f5f5f5] text-base cursor-pointer"
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative px-6 py-3 bg-[#FBF8F1] text-black rounded-lg">
                    <span className="font-medium"> Send Enquiry </span>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
