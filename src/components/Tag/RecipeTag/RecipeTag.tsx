import { useContext, useState, useEffect} from "react";
import { RecipeContext } from "../../../context/RecipeContext";
import { RecipeTagList } from "../../../assets/mock_data/TagData";
import TagItem from "../TagItem/TagItem";
import { TagInterface } from "../../../interfaces/Tag/Tag.interface";
import { menuTagList } from "../../../assets/mock_data/TagData";
import { TagCategoryInterface } from "../../../interfaces/Tag/TagCategory.interface";


export default function RecipeTag()
{
	const recipeContext = useContext(RecipeContext);
	//const [dependentRecipes, setdependentRecipes] = useState<TagInterface[]>()
	const [selectedCat, setSelectedCat] = useState<TagCategoryInterface[]>()
	const [nbSelectedCategories, setNbSelectedCategories] = useState<number>(0)

	useEffect(() => {
		if (recipeContext?.currentRecipes.menuTags)
		{
			setSelectedCat(recipeContext?.currentRecipes.menuTags);
			// en fonction des menuTags on doit chercher les "recipe" tags correspondants
			console.log(selectedCat)
		}
		
		if (recipeContext?.currentRecipes.selectedMenu.length)
		{
			setNbSelectedCategories(recipeContext.currentRecipes.selectedMenu.length);
		}
	}, [recipeContext])
	
	return(
		<div className="recipe-tag">
			<h2>Recettes</h2>
			<h3>Il y a {nbSelectedCategories} catégorie(s) sélectionnée(s) !</h3>
			<p>Les catégories séléctionnées sont : </p>
				{/*{selectedCat && selectedCat.map(menu => 
				<ul>
					<li key={menu}>{menu}</li>
				</ul>
				)}*/}
		</div>
	)
		//let selectedCat = recipeContext?.currentRecipes.menuTags;
	//let nbSelectedCategories = recipeContext?.currentRecipes.selectedMenu.length;

	//const getRecipesByMenu = (selectedMenus: number[] | undefined, menus: TagCategoryInterface[], tagLists: TagInterface[]) =>  {

	//	let newArray: TagInterface[];

	//	for (let i = 0; i < menus.length; i++)
	//	{
	//		let newArray: TagInterface[] = [{}];

	//		if (selectedMenus)
	//		{
	//			for (let j = 0; j < selectedMenus.length; j++)
	//			{
	//				if (menus[i].id == selectedMenus[j])
	//				{
	//					//console.log("selected menus " + selectedMenus[j]);
	//					let ret: TagInterface | undefined = tagLists.find(l => l.id == selectedMenus[j])
	//					if (ret)
	//					{
	//						//console.log("Pusing ret " + JSON.stringify(tagLists[j]));

	//						//newArray = [...newArray, {
	//						//	id: tagLists[j].id,
	//						//	label: tagLists[j].label,
	//						//	name: tagLists[j].name,
	//						//	color: tagLists[j].color
	//						//}]

	//						//newArray.push( {
	//						//	id: tagLists[j].id,
	//						//	label: tagLists[j].label,
	//						//	name: tagLists[j].name,
	//						//	color: tagLists[j].color
	//						//})
	//					}
	//				}
	//			}
	//		}
	//		//console.log(newArray)
	//		setdependentRecipes(newArray);
	//	}
	//}


	//const getRecipeTagByCat = (id: number) => {
	//	//console.log("")
	//	if (id - 1 < 0)
	//	{
	//		return (RecipeTagList)
	//		//return (["should return the whole list"]);
	//	}
	//	return ([{id: 42, label: "erreur", color: "red"}]);
	//}

	//Récupérer les tagList correspondants au catégorie sélectionnées

	//const getRecipes = (selectedCat: number[]) => {

	//}
}
