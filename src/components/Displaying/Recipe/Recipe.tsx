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
//import green from '@mui/material/';
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

import { useTheme,ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//import ScrollEffect from 'react-scroll-effects';

//Popover pour la description
import Popover from '@mui/material/Popover';
//import Typography from '@mui/material/Typography';

//import IconButton from '@mui/material/IconButton';
////import Box from '@mui/material/Box';
////import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
//import Brightness4Icon from '@mui/icons-material/Brightness4';
//import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

//TO DO: a re factoriser
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

  //const open = Boolean(anchorEl);

  //couleurs pales pour faire joli, pas utilise
  const colors = ["#CBE4F9", "#CDF5F6", "#EFF9DA", "#F9EBDF", "#D6CDEA", "F9D8D6", "#D6CDEA", "#8AE3B7", "#5DB7EA"]

  //Consommation du contexte material ui pour dark mode
  //const theme = useTheme();
  //const colorMode = React.useContext(ColorModeContext);

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

  const getColor= () => {
    //return ('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
    //return "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6)
    let shuffledArray = colors.sort((a, b) => 0.5 - Math.random())
    return (shuffledArray[0]);
  }

  return (
    <>
      <Box >
      <Grid container 
            //direction="row"
            //item xs={1} sm={12}
            justifyContent="center"
            alignItems="center"
            //justify="center"
            //alignItems="stretch"
            >
        {recipesToDisplay && recipesToDisplay?.map((recipe, index) => 
          <>
          <Card sx={{ width: "275px",/*height: "400px"*/ padding: "20px", margin: "10px", borderRadius: "30px", border: "none", boxShadow: "none"}}>
            <Typography 
              gutterBottom variant="h5"
              component="div"
              style={{fontFamily: "Grotesk", paddingBottom: "0px", fontSize:"16px"}}
              //aria-owns={open ? 'mouse-over-popover' : undefined}
              //aria-haspopup="true"
              //onMouseEnter={handlePopoverOpen}
              //onMouseLeave={handlePopoverClose}
            >
              {recipe.name}
            </Typography>
          
            {/*<FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                label=""/>*/}
          <CardMedia
            component="img"
            height="140"
            style={{borderRadius: "30px"}}
            image={recipe.imageURL}
          />
          {recipe && recipe.tags && recipe.tags.map( (tag) => 
              <Chip label={tag.label} variant="outlined" size="small" style={{/*backgroundColor: green[300],*/ margin: "5px", marginTop: "15px", border: "1px solid green", color: "green"}}/>
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
            {/*<Button size="small" color="secondary">Étapes</Button>*/}

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
                <Typography /*style={{overflow:scroll}}*/>
                  <Stack spacing={1}>
                  {recipe.steps.map((step) =>
                  //<ul>
                    <p style={{fontSize: "12px"}}>{step.order} : {step.description}</p>
                  //</ul>
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

//TODO: faire des media queries car pour l'instant pas top en mobile, ou revoir material ui
