import "./styles.css";
import React from "react";
import { useState } from "react";

var movies = {
  loveStory: [
    { name: "LoveAajKl", rating: "8/10" },
    { name: "Tadap", rating: "8/10" }
  ],
  mystery: [
    { name: "gumnam", rating: "7/10" },
    { name: "gupt", rating: "6/10" }
  ],
  sciFi: [
    { name: "krish", rating: "9/10" },
    { name: "Interstellar", rating: "9/10" }
  ]
};

export default function App() {
  const [genre, setgenre] = useState("loveStory");
  function genreHandler(genre) {
    setgenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "orange" }}>Are you a movie lover?</h1>
      <h3>Well if you are then I'm sure you will love my recommendations</h3>
      <h4>Check them out below</h4>
      <div>
        {Object.keys(movies).map((genre) => (
          <button
            onClick={() => genreHandler(genre)}
            style={{
              border: "solid",
              borderRadius: "1rem",
              textAlign: "center",
              padding: "1rem",
              margin: "1rem",
              backgroundColor: "yellow"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        <ul style={{ display: "block" }}>
          {movies[genre].map((movie) => (
            <li
              key={movie.name}
              style={{
                margin: "auto",
                marginTop: "1rem",
                padding: "1rem",
                border: "solid black",
                width: "45%",
                borderRadius: "0.5rem",
                borderColor: "black",
                backgroundColor: "orange"
              }}
            >
              <div style={{ fontSize: "larger" }}>{movie.name}</div>
              <div style={{ fontSize: "smaller" }}>{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
