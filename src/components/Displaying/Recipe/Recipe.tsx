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
  
  return (
    <div className="recipe-list">
    </div>
  );
};
