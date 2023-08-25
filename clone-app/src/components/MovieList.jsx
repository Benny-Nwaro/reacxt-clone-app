import React from "react";
import "../assets/Styles/MovieList.css";
import { Movies } from "../MovieData";

function MovieList() {
  return (
    <div>
      <div>
        {" "}
        {Movies.map((Movie) => (
          <div className="float-child " key={Movie.id}>
            <img
              className="h-auto max-w-lg rounded-lg hover:scale-110"
              src={Movie.image}
              alt="Movie image"
            />
            <h3>{Movie.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
