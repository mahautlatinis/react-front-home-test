import React, { Component, useState, useEffect } from "react";
import TagContextParent from "./components/TagContextParent/TagContextParent";

export default class App extends Component {
  
  render () {
    return (
      <div className="App">
        <div className="app-container">
          <h1>Super Cook App</h1>
          <br />
          <h2><strong>Style in progress...</strong></h2>
          <br />
          <h2>Bienvenue sur notre Super Cook App ✨ !</h2>
          <br />
          <p>Chaque menu propose différentes recettes adaptées à vos envies et besoins.</p>
          <p>Les tags sélectionnés se trouvent dans le header/navbar et sont indiqués ci-dessous via la couleur verte.</p>
          <p>Vous pouvez déselectionner les tags depuis le header ou depuis l'espace de contrôle dédié.</p>
          <p>En revanche vous pouvez les sélectionner uniquement depuis l'espace de contrôle.</p>
          <p>Il existe deux tags, 1. Les tags de menus et 2. Les tags de recettes rattachés aux menus.</p>
          <p>Lorsque vous déselectionnez un menu, tous les tags de recettes sont automatiquement déselectionnés.</p>
          <p>Lorsque vous tentez de déselectionner tous les menus, le menu "saison" est selectionné par défaut.</p>
          <TagContextParent />
        </div>
      </div>
    );
  }
}
