import React, { useState } from "react";
import { RecipeInterface } from "../../../interfaces/Recipe/Recipe.interface";
import Step from "../Step/Step";
import Tag from "../../Tag/Tag";
import "./style.css"

export default function RecipeItem(props: RecipeInterface)
{
  return (
    <div className="recipeItem">
      <div className="recipe-image"></div>
      <div className="recipe-description">
        <h2 className="recipe-title">Nom de la recette: {props.name}</h2>
        <div>
          {props.description}
        </div>
        <div className="recipe-description-centered">
        </div>
        <div className="ingredients-container-div">
          Ingrédients:
        </div>
        <div className="ingredients-quantity">
          <div>
            Etapes de la recette:
          </div>
        </div>
      </div>
    </div>
  );
};
