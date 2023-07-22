import React from "react";
import { ReactDOM } from "react";
import airbnb from "../../public/assets/airbnb.png";

function Navbar() {
  return (
    <div className="flex shadow-lg w-{550px} p-5">
      <img src={airbnb} className="m-2 h-9"></img>
    </div>
  );
}

export default Navbar;
