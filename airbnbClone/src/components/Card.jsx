import React from "react";
import { ReactDOM } from "react";
import katieZaferes from "../assets/katieZaferes.png";
import Star from "../assets/star.png";

function Navbar() {
  return (
    <div className="p-14 w-{175px} text-xs">
      <img src={katieZaferes} alt="" className="" />
      <div className="flex flex-col">
        <div className="flex items-center">
          <img src={Star} alt="" className="h-4" />
          <span className="text-gray-800">5.0</span>
          <span className="text-gray-800">(6)</span>
          <span className="text-gray-800">USA</span>
        </div>
        <p className="flex items-start">Life lessons with Katie Zaferes</p>
        <p className="flex items-start">
          <span className="font-bold">From $136</span> /person
        </p>
      </div>
    </div>
  );
}

export default Navbar;
