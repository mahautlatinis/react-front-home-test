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

  const getRecipesToDisplay = () => {

    let arrToDisplay: RecipeItemInterface[] = [];
    let len: number = recipeContext?.currentRecipes?.selectedRecipes?.length ? recipeContext?.currentRecipes?.selectedRecipes?.length : 0

    if (AllRecipes)
    {
      //Si tous les tags sont sélectionnés, retourner directement la liste entière des recettes 
      if (len == 8)
      {
        return (allRecipes);
      }
      //Si tous les tags ne sont pas sélectionnés, chercher les recettes correspondantes 
      else
      {
          let i: number = 0;
          let j: number = 0;
          let len2: number = AllRecipes?.length ? AllRecipes?.length : 0;
          let k: number = 0;
          let len3: number = 0;
          while (i < len)
          {
            j = 0;
            while (j < len2)
            {
              len3 = AllRecipes[j].tags.length;
              k = 0;
              while (k < len3)
              {
                if (recipeContext?.currentRecipes?.selectedRecipes && AllRecipes[j].tags[k].id == recipeContext?.currentRecipes?.selectedRecipes[i])
                {
                  arrToDisplay = [...arrToDisplay, AllRecipes[j]];
                  
                }
                k++;
              }
              j++;
            }
            i++;
          }
          //Filtrage pour éviter les doublons dans le tableau
          arrToDisplay = arrToDisplay.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.name === value.name
          )))

          //Shuffling pour qu'on voit bien que ca se rafraichit à chaque clique
          arrToDisplay.sort(() => Math.random() - 0.5)
          return (arrToDisplay)
          }
          //return (allRecipes);
    }
  }

  //const 

  useEffect(() => {
    //Rafraichissement à chaque le contexte est modifiés
    let res = getRecipesToDisplay();

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
