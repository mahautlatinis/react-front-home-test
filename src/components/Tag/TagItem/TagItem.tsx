import { TagCategoryInterface} from "../../../interfaces/Tag/TagCategory.interface";
import {useEffect, useContext} from "react"
import "./style.css"
import { RecipeContext } from "../../../context/RecipeContext";

export default function TagItem(props: TagCategoryInterface | null)
{
  useEffect(() => {
  })

  const recipeContext = useContext(RecipeContext)

  const getClassName = (id: number) => {
    let len = recipeContext?.currentRecipes.selectedMenu.length;
    if (len == recipeContext?.currentRecipes.maxSelection)
    {
      if (props && props.onSelect)
        props.onSelect(0);
      return (false);
    }
    if (recipeContext?.currentRecipes.selectedMenu.some( elem => {
      if (elem == id)
        return true
    }))
		{
			return true
		}
		else
		{
			return false
		}
  }

  return (
    <>
        <button
          className={props && getClassName(props.id) ? "selected" : "tag"}
          onClick={() => {
            if (props && props.onSelect)
              props.onSelect(props.id)
            }
        }>{props && props.name ? props.name : ""}
        </button>
    </>
  );
};
