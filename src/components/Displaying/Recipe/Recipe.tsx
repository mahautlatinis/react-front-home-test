import { RecipeItemInterface } from "../../../interfaces/Recipe/Recipe.interface";
import RecipeItem from "./RecipeItem/RecipeItem";
import { RecipeContext} from "../../../context/RecipeContext";
import { MenuContext} from "../../../context/MenuContext";
import React, { useState, useEffect, useContext} from "react";
import {RecipeTagInterface} from "../../../interfaces/Tag/RecipeTag.interface";
import { RecipeTagList} from "../../../assets/mock_data/TagData"
import {AllRecipes, oliveCake, waldorfSalad, pearPie, fondantChocolat, pavlova} from "../../../assets/mock_data/RecipeData"
import "./style.css"

export default function Recipe() 
{
  const recipeContext = useContext(RecipeContext);
  const menuContext = useContext(MenuContext);
  const allRecipes = AllRecipes;
  //Reviter d'utiliser trop, useState, récupérer directement les propriétés du contexte 
  const [recipesToDisplay, setRecipesToDisplay] = useState<RecipeItemInterface[]>();

  useEffect(() => {
    //Rafraichissement à chaque le contexte est modifiés
    let res: RecipeItemInterface[] | undefined = []; 
    if (recipeContext?.getRecipesToDisplay.getRecipesToDisplay)
      res = recipeContext?.getRecipesToDisplay?.getRecipesToDisplay();

    //Rafraichissement du tableau contenant les recettes dépendantes du contexte
    if (res)
      setRecipesToDisplay(res);

  }, [recipeContext])

  return (
    <div className="recipe-list">
      {recipesToDisplay && recipesToDisplay?.map((recipe) => 
        <RecipeItem
          name={recipe.name} 
          description={recipe.description}
          imageURL={recipe.imageURL}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
          tags={recipe.tags}
          key={recipe.name}
          />)}
    </div>
  );
};
