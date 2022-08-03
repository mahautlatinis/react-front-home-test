import React, { useState } from "react";
import { RecipeInterface } from "../../../interfaces/Recipe/Recipe.interface";
import Step from "../Step/Step";
import Tag from "../../Tag/Tag";
import "./style.css"

export default function RecipeItem(props: RecipeInterface)
{
  //const [showSteps, setShowSteps] = useState<Boolean>(false);
  //const [showIngredients, setShowIngredients] = useState<boolean>(false);

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
          {/*<button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? "Masquer" : "Afficher"}
          </button>*/}
        </div>
        <div className="ingredients-quantity">
          <div>
            Etapes de la recette:
            {/*<button onClick={() => setShowSteps(!showSteps)}>
              {showSteps ? "Masquer" : "Afficher"}
            </button>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
