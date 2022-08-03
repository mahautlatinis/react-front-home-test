import React, { Component, useState, useEffect } from "react";
import "./assets/styles/styles.css"
import Tag from "./components/Tag/Tag";
import MenuContextInterface, { MenuContext } from "./context/MenuContext";
import { menuTagList } from "./assets/mock_data/TagData";
import {TagCategoryInterface} from "./interfaces/Tag/TagCategory.interface"

type AppState = {
    currentRecipes: {
      selectedMenu: number[],
      menuTags: TagCategoryInterface[],
      maxSelection: number
    }
    onSelect: {
      handleSelection?: (...args: any) => void
    }
}

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {  
    currentRecipes: {
      selectedMenu: [0],
      menuTags: menuTagList,
      maxSelection: 3
    },
    onSelect: {
      handleSelection: undefined
    }};
  }

  handleMenuSelection = (...args: any) =>  {
  if (this.state.currentRecipes.selectedMenu.includes(args))
  {
    const newArray: number[] = this.state.currentRecipes.selectedMenu.filter(selected => { return selected != args});
    //console.log("First")
  }
  else
  {
    let newArray: number[] = this.state.currentRecipes.selectedMenu;
    if (this.state.currentRecipes.selectedMenu.includes(0))
      newArray = [args]
    else if (args == 0)
      newArray = [0];
    else
      newArray = [...this.state.currentRecipes.selectedMenu, args];
    this.setState({
              currentRecipes: {
                selectedMenu: newArray,
                menuTags: this.state.currentRecipes.menuTags,
                maxSelection: this.state.currentRecipes.maxSelection
                }
              })
  }
  }

  render () {
    return (
      <div className="App">
        <div className="app-container">
          <h1>Super Cook App</h1>
          <h2>Bienvenue sur notre Super Cook App ✨ !</h2>
          <p>Chaque menu propose différentes recettes adaptées à vos besoins et envies.</p>
          <MenuContext.Provider
                value={
                    {currentRecipes: {
                        selectedMenu: this.state.currentRecipes.selectedMenu,
                        menuTags: this.state.currentRecipes.menuTags,
                        maxSelection: 3}, 
                      onSelect: {
                        handleSelection: this.handleMenuSelection}
                      }}
            >
              <Tag />
          </MenuContext.Provider>
        </div>
      </div>
    );
  }
}
