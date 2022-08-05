import { RecipeItemInterface } from "../../../interfaces/Recipe/Recipe.interface";
import RecipeItem from "./RecipeItem/RecipeItem";
import { RecipeContext} from "../../../context/RecipeContext";
import { MenuContext} from "../../../context/MenuContext";
import React, { useState, useEffect, useContext} from "react";
//import RecipeContextInterface from "../../../context/RecipeContext";
import {RecipeTagInterface} from "../../../interfaces/Tag/RecipeTag.interface";
import { RecipeTagList} from "../../../assets/mock_data/TagData"
import {AllRecipes, oliveCake, waldorfSalad, pearPie, fondantChocolat, pavlova} from "../../../assets/mock_data/RecipeData"
import "./style.css"

export default function Recipe() 
{
  const recipeContext = useContext(RecipeContext);
  const menuContext = useContext(MenuContext);

  const [recipeTags, setRecipeTags] = useState<RecipeTagInterface[] | undefined>(RecipeTagList)
  const [selectedRecipesTag, setSelectedRecipesTag] = useState<number[] | undefined >([]);
  const [allRecipes, setAllRecipes] = useState<RecipeItemInterface[]>(AllRecipes);
  const [recipesToDisplay, setRecipesToDisplay] = useState<RecipeItemInterface[]>(AllRecipes);


  const getRecipesToDisplay = () => {

    console.log("calling get recipes to display");

    let arrToDisplay: RecipeItemInterface[] = [];
    let len: number = selectedRecipesTag?.length ? selectedRecipesTag.length : 0

    //console.log("len is " + recipeTags?.length + "vs " + len);
    // Object.keys(allRecipes).length


    if (selectedRecipesTag && selectedRecipesTag.length == recipeTags?.length)
    {
      //console.log("all selected !");
      return (allRecipes);
    }
    //return (allRecipes);


    //let i: number = 0;
    //len = selectedRecipesTag?.length ? selectedRecipesTag.length : 0
    //let j: number = 0;
    //let len2: number = AllRecipes?.length ? AllRecipes?.length : 0;
    //let k: number = 0;
    //let len3: number = 0;
    //while (i < len)
    //{
    //  //faire le tour de la liste
    //  j = 0;
    //  while (j < len2)
    //  {
    //    //console.log("recipe is " + JSON.stringify(AllRecipes[j].tags))
    //    len3 = AllRecipes[j].tags.length;
    //    k = 0;
    //    while (k < len3)
    //    {
    //      //console.log("id is " + AllRecipes[j].tags[k].id);
    //      if (selectedRecipesTag && selectedRecipesTag[i] && AllRecipes[j].tags[k].id == selectedRecipesTag[i])
    //      {
    //        //console.log("Found an id that is selected : " + selectedRecipesTag[i]);
    //        arrToDisplay = [...arrToDisplay, AllRecipes[j]];
    //      }
    //      k++;
    //    }
    //    j++;
    //  }
    //  i++;
    //}
    ////console.log("arr to display is " + JSON.stringify(arrToDisplay));
    //return ([])
  }

  //const 

  useEffect(() => {
    //console.log("Recipe context updated");
    //console.log(recipeContext?.currentRecipes.selectedRecipes);
    setRecipeTags(recipeContext?.currentRecipes.recipeTags);
    setSelectedRecipesTag(recipeContext?.currentRecipes.selectedRecipes);

    let res = getRecipesToDisplay();
    if (res)
      setRecipesToDisplay(res);

    //console.log("recipes to display are " + JSON.stringify(recipesToDisplay))

  }, [recipeContext])

  //0. Récupérer toutes les recettes  
  
  //1. On récupère les tags de recettes sélectionnées

  //2. Faire le tour des recettes et si la recette est possède un tag dans les tags sélectionnés, on l'affiche

  //J'ai l'id d'un Tag de recette et en fonction de cet id, je veux récupérer les recettes correspondantes


  return (
    <div className="recipe-list">
      {recipesToDisplay && recipesToDisplay?.map((recipe) => 
        <>
        <RecipeItem
          name={recipe.name} 
          description={recipe.description}
          imageURL={recipe.imageURL}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
          tags={recipe.tags}
          />
        </>)}
    </div>
  );
};
