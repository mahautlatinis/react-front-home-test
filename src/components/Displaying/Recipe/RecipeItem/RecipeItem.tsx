import React, { useState } from "react";
import { RecipeItemInterface } from "../../../../interfaces/Recipe/Recipe.interface";
import Ingredient from "../Ingredient/Ingredient";
import Step from "./Step/Step";
import Tag from "../../Tag/Tag";
import "./style.css"

export default function RecipeItem(props: RecipeItemInterface)
{
  return (
    <div className="recipeItem">
      <div className="recipe-description">
        <h2 className="recipe-title">{props.name}</h2>
        <p><i>
          {props.description}
        </i></p>
        <img src={props.imageURL} className="recipe-image recipe-cover"></img>
        <br />
        <ul>
          {props.tags.map( (tag) => 
            <>
              <button className="" key={tag.label}>{tag.label}</button>
            </>
          )}
          <br />
          <Ingredient 
                list={props.ingredients}
                />
          <br />
              <Step 
                list={props.steps}
              />
        </ul>
      </div>
    </div>
  );
};
