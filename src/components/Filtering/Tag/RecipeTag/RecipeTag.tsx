import { useContext, useState, useEffect} from "react";
import { MenuContext } from "../../../../context/MenuContext";
import { RecipeTagList } from "../../../../assets/mock_data/TagData";
import TagItem from "../../../Displaying/Tag/TagItem/TagItem";
import { RecipeTagInterface } from "../../../../interfaces/Tag/RecipeTag.interface";
import { menuTagList } from "../../../../assets/mock_data/TagData";
import { MenuTagInterface } from "../../../../interfaces/Tag/MenuTag.interface";


export default function RecipeTag()
{
	const menuContext = useContext(MenuContext);
	const [selectedCat, setSelectedCat] = useState<RecipeTagInterface[]>(RecipeTagList)
	const [nbSelectedCategories, setNbSelectedCategories] = useState<number>(0)

	useEffect(() => {
		if (menuContext?.currentMenues.selectedMenu && menuContext?.currentMenues.selectedMenu.length == 0)
		{
			console.log("emptying");
			setSelectedCat([]);
		}
	}, [menuContext])
	
	return(
		<div className="recipe-tag">
			<h2>Recettes</h2>
			{/*<h3>Il y a {nbSelectedCategories} catégorie(s) sélectionnée(s) !</h3>*/}
			{/*<p>Les catégories séléctionnées sont : </p>*/}
			<div>
				<ul>
					{selectedCat && selectedCat.map(recipe => 
						<TagItem
							id={recipe.id ? recipe.id : 0}
							name={recipe.label ? recipe.label : ""}
							key={recipe.label ? recipe.label : ""}
							tagType="recipeTag"
							tags={[]}
							//className={menuContext ? "tag" : "selected"}
							/>
							//{recipe.label}
					)}
				</ul>
			</div>
		</div>
	)
}
