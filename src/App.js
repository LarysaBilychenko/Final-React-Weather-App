import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://incandescent-frangollo-b2685b.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Larysa Bilychenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LarysaBilychenko/Final-React-Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
