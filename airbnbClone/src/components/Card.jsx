import React from "react";
import { ReactDOM } from "react";
import Star from "../../public/assets/Star.png";

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.item.location === "Online") badgeText = "ONLINE";
  return (
    <div className="w-44 text-xs flex flex-col relative">
      {badgeText && (
        <div className="absolute top-2 left-2 bg-white p-1 rounded-sm font-bold">
          {badgeText}
        </div>
      )}
      <img
        src={`../../public/assets/${props.item.coverImg}`}
        alt=""
        className="w-full rounded-lg mb-2 h-60"
      />
      <div className="flex flex-col">
        <div className="flex items-center">
          <img src={Star} alt="" className="h-4" />
          <span className="">{props.item.stats.rating}</span>
          <span className="">({props.item.stats.reviewCount})</span>
          <span className="">{props.item.location}</span>
        </div>
        <p className="flex items-start">{props.item.title}</p>
        <p className="flex items-start">
          <span className="font-bold">From ${props.item.price}</span> /person
        </p>
      </div>
    </div>
  );
}

export default Card;
