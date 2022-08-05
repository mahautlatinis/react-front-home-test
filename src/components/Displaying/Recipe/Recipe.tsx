import { RecipeItemInterface } from "../../../interfaces/Recipe/Recipe.interface";
import RecipeItem from "./RecipeItem/RecipeItem";
import { RecipeContext} from "../../../context/RecipeContext";
import { MenuContext} from "../../../context/MenuContext";
import React, { useState, useEffect, useContext} from "react";
import {RecipeTagInterface} from "../../../interfaces/Tag/RecipeTag.interface";
import { RecipeTagList} from "../../../assets/mock_data/TagData"
import {AllRecipes, oliveCake, waldorfSalad, pearPie, fondantChocolat, pavlova} from "../../../assets/mock_data/RecipeData"
import "./style.css"

//Import style material ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
    //<div className="recipe-list">
    <>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {recipesToDisplay && recipesToDisplay?.map((recipe) => 
          <>
          <Card sx={{ width: "15%", height: "350px", padding: "20px", margin: "20px" }}>
          <CardMedia
            component="img"
            height="140"
            image={recipe.imageURL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" >Ingrédients</Button>
            <Button size="small">Étapes</Button>
          </CardActions>
          <Typography variant="body2" color="text.secondary" align="justify">
              {recipe.description}
            </Typography>
        </Card>
        </>
        )}
      </Grid>
    </Box>
    </>
  );
};
