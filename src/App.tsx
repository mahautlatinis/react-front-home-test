import React, { Component, useState, useEffect } from "react";
import TagContextParent from "./components/TagContextParent/TagContextParent";

export default class App extends Component {
  
  render () {
    return (
      <div className="App">
        <div className="app-container">
          <br />
          <h1><strong>Bienvenue sur notre Super Cook App ✨ !</strong></h1>
          <br /><br />
          <div>
            <p>Chaque <span style={{color: "green"}}>menu propose différentes recettes </span>adaptées à vos envies et besoins.</p>
            <p>Les tags sélectionnés se trouvent dans la Toolbar ci-dessous et sont indiqués par <span style={{color: "green"}}>la couleur verte.</span></p>
            <p>Vous pouvez <span style={{color: "#EE4B2B"}}>déselectionner</span> les tags depuis la <span style={{color: "black"}}>toolbar ou depuis l'espace de contrôle dédié.</span></p>
            <p>En revanche, vous pouvez les <span style={{color: "green"}}>sélectionner</span> uniquement depuis l'espace de contrôle.</p>
            <p>Lorsque vous modifiez la sélection des menus, tous les tags de recettes sont <span style={{color: "#EE4B2B"}}>automatiquement déselectionnés.</span></p>
            <p>Lorsque vous tentez de déselectionner tous les menus, le menu "saison" est <span style={{color: "green"}}>selectionné par défaut.</span></p>
          </div>
          <br /><br />
          <TagContextParent />
        </div>
      </div>
    );
  }
}
