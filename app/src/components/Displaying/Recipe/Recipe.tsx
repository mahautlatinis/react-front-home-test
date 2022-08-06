import { RecipeItemInterface } from "../../../interfaces/Recipe/Recipe.interface";
import RecipeItem from "./RecipeItem/RecipeItem";
import { RecipeContext} from "../../../context/RecipeContext";
import React, { useState, useEffect, useContext} from "react";

//Import material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Recipe() 
{
  //Consommation de mes contextes
  const recipeContext = useContext(RecipeContext);
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
    <>
      <Box >
      <Grid container 
            justifyContent="center"
            alignItems="center"
            >
        {/* Recipe Item */}
        {recipesToDisplay && recipesToDisplay?.map((recipe, index) => 
          <RecipeItem 
            name={recipe.name}
            description={recipe.description}
            imageURL={recipe.imageURL}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
            tags={recipe.tags}
            key={recipe.name}
          />
        )}
      </Grid>
    </Box>
    </>
  );
};
