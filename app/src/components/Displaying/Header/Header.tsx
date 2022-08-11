import React, {useContext, useEffect, useState} from "react";
import { RecipeContext} from "../../../context/RecipeContext";
import { menuTagList,  RecipeTagList} from "../../../assets/mock_data/TagData";
import { MenuTagInterface } from "../../../interfaces/Tag/MenuTag.interface";
import { RecipeTagInterface } from "../../../interfaces/Tag/RecipeTag.interface";
import TagItem from "../Tag/TagItem/TagItem";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Header()
{
	const MenuTaglist = menuTagList;
	const recipeTagList = RecipeTagList;
	const [selectedMenuTags, setSelectedMenuTags] = useState(MenuTaglist);
	const [selectedRecipesTags, setSelectedRecipesTags] = useState<RecipeTagInterface[]>(recipeTagList)
	const recipeContext = useContext(RecipeContext);

	useEffect(() => {
		let ret: MenuTagInterface[] | undefined = [];
		let recipe : RecipeTagInterface[] | undefined = [];

		if (recipeContext?.getSelectedMenuTags.getSelectedMenuTags !== undefined)
			ret = recipeContext?.getSelectedMenuTags?.getSelectedMenuTags();
		if (ret)
			setSelectedMenuTags(ret);
		if (recipeContext?.getSelectedRecipesTags.getSelectedRecipesTags !== undefined)
			recipe = recipeContext?.getSelectedRecipesTags?.getSelectedRecipesTags();
		setSelectedRecipesTags(recipe);
	}, [recipeContext])


	return (
		<>
			<Box sx={{ flexGrow: 1}}>
				<AppBar position="static" color="transparent" style={{height: "100px",padding:"15px", overflowX:"scroll", overflowY:"hidden", whiteSpace:"nowrap" /*justifyContent: "space-evenly", alignItems: "center"*/}}>
					<Toolbar>
						<ul  style={{overflowX: 'scroll', display: "inline"}}>
							{selectedMenuTags && selectedMenuTags.map( (menuTag) => 
							<TagItem 
								tagType="headerMenu"
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
