import React, { Component, useState, useEffect } from "react";
import TagContextParent from "./components/TagContextParent/TagContextParent";

export default class App extends Component {
  
  render () {
    return (
      <div className="App">
        <div className="app-container">
          {/*<h1>Super Cook App</h1>*/}
          {/*<h2>Bienvenue sur notre Super Cook App ✨ !</h2>*/}
          {/*<p>Chaque menu propose différentes recettes adaptées à vos besoins et envies.</p>*/}
          <TagContextParent />
        </div>
      </div>
    );
  }
}
