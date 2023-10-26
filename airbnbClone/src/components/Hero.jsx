import React from "react";
import { ReactDOM } from "react";
import heroImage from "../../public/assets/heroImage.png";

function Navbar() {
  return (
    <section>
      <div className="flex items-center justify-center p-14 px-9">
        <img src={heroImage} alt="" className="h-60 md:h-80" />
      </div>
      <div className="flex flex-col items-start m-14">
        <h1 className="font-serif text-3xl font-semibold leading-10">
          Online Experiences
        </h1>
        <p className="font-serif text-base font-light leading-4">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Navbar;
