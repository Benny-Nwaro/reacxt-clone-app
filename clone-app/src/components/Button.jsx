import React from "react";
import "../assets/Styles/header.css";

export default function Button() {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Sign Up Now
    </button>
  );
}
