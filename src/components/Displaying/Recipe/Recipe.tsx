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
import { green, blue, purple } from "@material-ui/core/colors";

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

//pour le coeur
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function Recipe() 
{
  //Consommation de mes contextes
  const recipeContext = useContext(RecipeContext);
  const menuContext = useContext(MenuContext);
  const allRecipes = AllRecipes;
  //Reviter d'utiliser trop, useState, récupérer directement les propriétés du contexte 
  const [recipesToDisplay, setRecipesToDisplay] = useState<RecipeItemInterface[]>();

  //Accordéon ingrédients 
  const [expanded, setExpanded] = React.useState<string | false>(false);

  //Pour le popover
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  //couleurs pales pour faire joli, pas utilis
  //const colors = ["#CBE4F9", "#CDF5F6", "#EFF9DA", "#F9EBDF", "#D6CDEA", "F9D8D6", "#D6CDEA", "#8AE3B7", "#5DB7EA"]


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

  //const getColor= () => {
  //  let shuffledArray = colors.sort((a, b) => 0.5 - Math.random())
  //  return (shuffledArray[0]);
  //}

  return (
    <>
      <Box >
      <Grid container 
            justifyContent="center"
            alignItems="center"
            >
        {recipesToDisplay && recipesToDisplay?.map((recipe, index) => 
          <>
          <Card sx={{ width: "275px", padding: "20px", margin: "10px", borderRadius: "30px", border: "none", boxShadow: "none"}}>
            <Typography 
              gutterBottom variant="h5"
              component="div"
              style={{fontFamily: "Grotesk", paddingBottom: "0px", fontSize:"16px"}}
            >
              {recipe.name}
            </Typography>
            <CardMedia
              component="img"
              height="140"
              style={{borderRadius: "30px"}}
              image={recipe.imageURL}
            />
          {recipe && recipe.tags && recipe.tags.map( (tag) => 
              <Chip label={tag.label} variant="outlined" size="small" style={{/*backgroundColor: green[300],*/ margin: "5px", marginTop: "15px", border: "1px solid green", color: "green"}}/>
            )}

            <Accordion expanded={expanded === 'panel' + recipe.name} onChange={handleChange('panel' + recipe.name )} style={{marginTop: '10px'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>Ingrédients</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <>
                    <AvatarGroup max={6}>
                      {recipe.ingredients.map((ingredient) => 
                      <Avatar src={ingredient.imgURL} style={{border: "1px solid #f2f3f4"}}/>)}
                    </AvatarGroup>
                  <Stack direction="row" spacing={1}>
                  {recipe.ingredients.map((ingredient) =>
                  <>
                    <span style={{fontSize: "12px"}}>{ingredient.name} </span>
                  </>
                    )}
                  </Stack>
                  </>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2' + recipe.name } onChange={handleChange('panel2' + recipe.name)} style={{marginTop: '10px'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography />
                <Typography>Étapes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Stack spacing={1}>
                  {recipe.steps.map((step) =>
                    <p style={{fontSize: "12px"}}>{step.order} : {step.description}</p>
                    )}
                  </Stack>
                </Typography>
              </AccordionDetails>
            </Accordion>
        </Card>
        </>
        )}
      </Grid>
    </Box>
    </>
  );
};
