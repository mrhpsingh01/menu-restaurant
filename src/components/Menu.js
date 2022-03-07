import React from "react";
import { Data } from "../data/data";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col bg-[#fcfbfa]">
      <div className="pt-10 pb-10">
        <div className="relative after:absolute text-4xl font-semibold text-yellow-800  after:bg-green-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
          Our Menu
        </div>
      </div>

      <div className="w-[70vw] h-auto grid grid-cols-3 place-items-center pb-20">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
