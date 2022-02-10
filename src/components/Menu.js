import React from "react";
import { Data } from "../data/data";
import "../styles/Menu.css";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menuTitle">
        <div className="menuList">
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
    </div>
  );
}

export default Menu;
