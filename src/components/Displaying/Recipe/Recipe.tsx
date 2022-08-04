import { RecipeInterface } from "../../../interfaces/Recipe/Recipe.interface";
import RecipeItem from "./RecipeItem/RecipeItem";
import { RecipeContext} from "../../../context/RecipeContext";
import { MenuContext} from "../../../context/MenuContext";
import React, { useState, useEffect, useContext} from "react";
import "./style.css"

export default function Recipe(props: RecipeInterface) 
{
  const recipeContext = useContext(RecipeContext);
  const menuContext = useContext(MenuContext);

  //const getRecipesToDisplay = () => {
  //  let recipesToDisplay: any;

  //  recipesToDisplay = recipeContext?.currentRecipes.clearedRecipes;
  //  console.log("recipes to display " + recipesToDisplay);
  //}

  //useEffect( () => {
  //  getRecipesToDisplay();
  //}, [recipeContext, menuContext])

  return (
    <div className="recipe-list">
    </div>
  );
};
