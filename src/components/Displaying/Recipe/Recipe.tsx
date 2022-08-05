import { RecipeItemInterface } from "../../../interfaces/Recipe/Recipe.interface";
import RecipeItem from "./RecipeItem/RecipeItem";
import { RecipeContext} from "../../../context/RecipeContext";
import { MenuContext} from "../../../context/MenuContext";
import React, { useState, useEffect, useContext} from "react";
import {RecipeTagInterface} from "../../../interfaces/Tag/RecipeTag.interface";
import { RecipeTagList} from "../../../assets/mock_data/TagData"
import {AllRecipes, oliveCake, waldorfSalad, pearPie, fondantChocolat, pavlova} from "../../../assets/mock_data/RecipeData"
import "./style.css"
import { Chip } from "@material-ui/core";

//import { useState } from "react";

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
//import green from '@mui/material/';
import { green, blue } from "@material-ui/core/colors";

//Import pour l'accordéon
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Avatar pour les images des ingrédients
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AvatarGroup from '@mui/material/AvatarGroup';
import { IndeterminateCheckBoxRounded } from "@mui/icons-material";

export default function Recipe() 
{
  const recipeContext = useContext(RecipeContext);
  const menuContext = useContext(MenuContext);
  const allRecipes = AllRecipes;
  //Reviter d'utiliser trop, useState, récupérer directement les propriétés du contexte 
  const [recipesToDisplay, setRecipesToDisplay] = useState<RecipeItemInterface[]>();

  //Accordéon ingrédients 
  const [expanded, setExpanded] = React.useState<string | false>(false);
  //const emojis = ['😀', '😋', '🍰', '🍡', '🍫', '🥗', '🍓', '🥦', '🥑', '🍉', '🍽', '🍇', '🫐', '🍐', '🥩', '🍑']
  //const [fruits, setFruits] = useState(['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🫐','🥝','🍅','🫒','🥥'])

  //marche pas, a revoir
  //const getRandomFruits = () => {
  //  const random = fruits[~~(Math.random() * fruits.length)]
  //  return random;
  //}

  useEffect(() => {
    //Rafraichissement à chaque le contexte est modifiés
    let res: RecipeItemInterface[] | undefined = []; 
    if (recipeContext?.getRecipesToDisplay.getRecipesToDisplay)
      res = recipeContext?.getRecipesToDisplay?.getRecipesToDisplay();

    //Rafraichissement du tableau contenant les recettes dépendantes du contexte
    if (res)
      setRecipesToDisplay(res);

  }, [recipeContext])

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    //<div className="recipe-list">
    <>
      <Box /*sx={{ flexGrow: 1 }}*/>
      <Grid container 
            direction="row"
            justifyContent="center"
            alignItems="stretch"

      /*spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}*/>
        {recipesToDisplay && recipesToDisplay?.map((recipe, index) => 
          <>
          <Card sx={{ width: "15%", height: "500px", padding: "20px", margin: "10px", borderRadius: "30px", border: "none", boxShadow: "none"}}>
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Grotesk", marginBottom: "10px", paddingBottom: "0px"}}>
              {recipe.name}
            </Typography>
          <CardMedia
            component="img"
            height="140"
            //border-radius="20px"
            style={{borderRadius: "30px"}}
            image={recipe.imageURL}
          />
          {recipe && recipe.tags && recipe.tags.map( (tag) => 
              <Chip label={tag.label} variant="outlined" style={{/*backgroundColor: green[300],*/ margin: "5px", marginTop: "15px", border: "1px solid green"}}/>
            )}
          {/*<CardContent>
          </CardContent>*/}
          {/*<CardActions>      
          </CardActions>*/}
          {/* TODO! mettre la description on hover ! */}
          {/*<Typography variant="body2" color="text.secondary" align="justify">
              {recipe.description}
            </Typography>*/}
            {/*<Button size="small" color="success">Ingrédients</Button>*/}
            <Accordion expanded={expanded === 'panel' + index.toString()} onChange={handleChange('panel' + index.toString() )} style={{marginTop: '10px'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ color: 'green'}}>Ingrédients</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <>
                    <AvatarGroup max={6} /*style={{width: "65%"}}*/>
                      {recipe.ingredients.map((ingredient) => 
                      <Avatar src={ingredient.imgURL} style={{border: "2px solid #E6E6E6"}}/>)}
                    </AvatarGroup>
                  {/*</Stack>*/}
                  <Stack direction="row" spacing={1}>
                  {recipe.ingredients.map((ingredient) =>
                  <>
                    {/*<Avatar src={ingredient.imgURL}/>*/}
                    <span>{ingredient.name} </span>
                  </>
                    )}
                  </Stack>
                  </>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <br />
            {/*<Button size="small" color="secondary">Étapes</Button>*/}
        </Card>
        </>
        )}
      </Grid>
    </Box>
    
    </>
  );
};

//TODO: faire des media queries car pour l'instant pas top en mobile, ou revoir material ui
