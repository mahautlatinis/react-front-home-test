import { useState } from "react";
import "./assets/styles/styles.css"
import Tag from "./components/Tag/Tag";

export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1>Super Cook App</h1>
        <h2>Bienvenue sur notre Super Cook App ✨ !</h2>
        <p>Chaque menu propose différentes recettes adaptées à vos besoins et envies.</p>
        <Tag />
      </div>
    </div>
  );
}
