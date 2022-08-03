import React, { Component, useState } from "react";
import "./assets/styles/styles.css"
import Tag from "./components/Tag/Tag";
import RecipeContextInterface, { RecipeContext } from "./context/RecipeContext";
import { menuTagList } from "./assets/mock_data/TagData";

interface AppProps {
}

const sampleRecipeContext: RecipeContextInterface = {
  selectedMenu: [0],
  menuTags: menuTagList,
  maxSelection: 3
};

export default class App extends Component {

  handleMenuSelection = (id: number) => {
    //if (this.state.selectedMenu.includes(id))
    //{
    //  const newArray: number[] = this.state.selectedMenu.filter(selected => { return selected != id});
    //  this.setState({selectedMenu: newArray});
    //}
    //else
    //{
    //  let newArray: number[] = this.state.selectedMenu;
    //  if (this.state.selectedMenu.includes(0))
    //  {
    //    newArray = [id]
    //    this.setState({selectedMenu: newArray});
    //  }
    //  else if (id == 0)
    //  {
    //    newArray = [0];
    //    this.setState({selectedMenu: newArray});
    //  }
    //  else {
    //    newArray = [...this.state.selectedMenu, id];
    //    this.setState({selectedMenu: newArray});
    //  }
    //}
  }


  render () {
    return (
      <div className="App">
        <div className="app-container">
          <h1>Super Cook App</h1>
          <h2>Bienvenue sur notre Super Cook App ✨ !</h2>
          <p>Chaque menu propose différentes recettes adaptées à vos besoins et envies.</p>
          <RecipeContext.Provider
                value={sampleRecipeContext}
            >
              <Tag />
          </RecipeContext.Provider>
        </div>
      </div>
    );
  }
}
