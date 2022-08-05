import React, { useState } from "react";
import { RecipeItemInterface } from "../../../../interfaces/Recipe/Recipe.interface";
import Step from "./Step/Step";
import Tag from "../../Tag/Tag";
import "./style.css"

export default function RecipeItem(props: RecipeItemInterface)
{
  return (
    <div className="recipeItem">
      <div className="recipe-description">
        <h2 className="recipe-title">Nom de la recette: {props.name}</h2>
        <p>
          {props.description}
        </p>
          <img src={props.imageURL} className="recipe-image"></img>
        
        {/*<div className="recipe-description-centered">
        </div>*/}
        {/*<ul className="ingredients-container-div">
          <label>Ingrédients:</label>
          <li></li>
        </ul>*/}
        {/*<hr></hr>*/}
        {/*<ul className="ingredients-quantity"/>
          <label>Etapes de la recette:</label>
          <li>
          </li>
        </ul>*/}
        <br />
        <ul>
          {props.tags.map( (tag) => 
            <button className="" key={tag.label}>{tag.label}</button>
          )}
        </ul>
      </div>
    </div>
  );
};
