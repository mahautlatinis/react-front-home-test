import React, { Component, useState, useEffect } from "react";
import TagContextParent from "./components/TagContextParent/TagContextParent";

export default class App extends Component {
  
  render () {
    return (
      <>
      <div className="App">
        {/*<div className="app-container">*/}
          <TagContextParent />
        {/*</div>*/}
      </div>
    </>
    );
  }
}
