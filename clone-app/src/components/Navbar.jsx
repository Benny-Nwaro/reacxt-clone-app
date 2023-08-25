import React from "react";
import Button from "./Button";
import logo2 from "../assets/images/logo2.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent w-100 p-6">
      <img className="float:left pr-8 " src={logo2} />

      <div className="text-sm lg:flex-grow pr-8 m-3 ">
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4 float:left;"
        >
          Home
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4"
        >
          Redeem
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey"
        >
          My movies
        </a>
      </div>
      <div>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4 float:left;"
        >
          Sign In
        </a>
        <Button />
      </div>
    </nav>
  );
}
