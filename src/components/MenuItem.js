import React from "react";

function MenuItem({ name, image, price }) {
  return (
    <div className="border-2 w-72 h-80 m-5 shadow-[0px_3px_15px_rgba(0,0,0,0.2)] hover:shadow-[0px_3px_15px_rgba(0,0,0,0.5)] hover:ease-in hover:duration-300 hover:cursor-pointer rounded-3xl bg-[#fcfbfa] hover:bg-[#FBF8F1]">
      <div
        className="rounded-tl-2xl rounded-tr-2xl w-full h-52 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="px-5 pt-5 text-yellow-700 font-bold">{name}</div>
      <div className="px-5 text-base text-green-500 font-medium">$ {price}</div>
    </div>
  );
}

export default MenuItem;
