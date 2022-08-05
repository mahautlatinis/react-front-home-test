import "./style.css"
import React, {useContext, useEffect, useState} from "react";
//import RecipeContextInterface from "../../../context/RecipeContext";
import { RecipeContext} from "../../../context/RecipeContext";
import { MenuContext} from "../../../context/MenuContext";
import { menuTagList,  RecipeTagList} from "../../../assets/mock_data/TagData";
import { MenuTagInterface } from "../../../interfaces/Tag/MenuTag.interface";
import { RecipeItemInterface } from "../../../interfaces/Recipe/Recipe.interface";
import { RecipeTagInterface } from "../../../interfaces/Tag/RecipeTag.interface";
import RecipeTag from "../../Filtering/Tag/RecipeTag/RecipeTag";
import TagItem from "../Tag/TagItem/TagItem";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';


export default function Header()
{
	const recipeContext = useContext(RecipeContext);
	const menuContext = useContext(MenuContext);
	const MenuTaglist = menuTagList;
	const recipeTagList = RecipeTagList;
	const [selectedMenuTags, setSelectedMenuTags] = useState(MenuTaglist);
	const [selectedRecipesTags, setSelectedRecipesTags] = useState<RecipeTagInterface[]>(recipeTagList)
	


	useEffect(() => {
		//Récupération depuis le contexte des menus Tags sélectionnés 
		let ret: MenuTagInterface[] | undefined = [];

		if (recipeContext?.getSelectedMenuTags.getSelectedMenuTags != undefined)
			ret = recipeContext?.getSelectedMenuTags?.getSelectedMenuTags();
		if (ret)
			setSelectedMenuTags(ret);

		//Récupérations des tags de recttes sélectionnés
		let recipe : RecipeTagInterface[] | undefined = [];
		
		if (recipeContext?.getSelectedRecipesTags.getSelectedRecipesTags != undefined)
			recipe = recipeContext?.getSelectedRecipesTags?.getSelectedRecipesTags();
		setSelectedRecipesTags(recipe);

	}, [recipeContext])
	return (
		<>
		<h1><strong>Bienvenue sur notre Super Cook App ✨ !</strong></h1>
		<Box sx={{ flexGrow: 1}}>
			<AppBar position="static" color="transparent">
				<Toolbar>
					<ul>
						{selectedMenuTags && selectedMenuTags.map( (menuTag) => 
						<TagItem 
							tagType="headerRecipe"
							id={menuTag.id}
							name={menuTag.name}
							key={menuTag.id}
						/>
						)}
						{selectedRecipesTags && selectedRecipesTags.map( (recipeTag) => 
							<TagItem
								tagType="headerRecipe"
								id={recipeTag.id}
								name={recipeTag.label}
								key={recipeTag.id}
							/>
						)}
					</ul>
				</Toolbar>
			</AppBar>
			</Box>
		<br />
		</>
	);
};
