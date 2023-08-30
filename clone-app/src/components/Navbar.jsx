import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo2 from "../assets/images/logo2.png";

export default function Navbar() {
  return (
    <nav className="absolute top-0 flex items-center justify-between flex-wrap bg-inherit w-full pt-8 ">
      <img className="float:left pr-8 " src={logo2} />

      <div className="text-sm lg:flex-grow pr-8 m-3 ">
        <Link
          to={`/`}
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4 float:left;"
        >
          Home
        </Link>
        <Link
          to={`contacts`}
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4 float:left;"
        >
          Contact
        </Link>
        <Link
          to={`about`}
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4 float:left;"
        >
          About
        </Link>

        <Link
          to={`about`}
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4 float:left;"
        >
          My Movies
        </Link>
      </div>
      <div className="float-left">
        <Link
          to={`login`}
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4 float:left;"
        >
          Sign In
        </Link>
        <Button />
      </div>
    </nav>
  );
}
