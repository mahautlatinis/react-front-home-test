import { TagCategoryInterface} from "../../../interfaces/Tag/TagCategory.interface";
import {useEffect, useContext} from "react"
import "./style.css"
import { RecipeContext } from "../../../context/RecipeContext";

export default function TagItem(props: TagCategoryInterface | null)
{
  const recipeContext = useContext(RecipeContext)

  const getClassName = (id: number) => {
    if (props?.tagType === "menuTag")
    {
      if (recipeContext?.currentRecipes.selectedMenu.some( elem => {
        if (elem == id)
          return true}))
      {
        return true
      }
      else
        return false
    }
    
  }

  useEffect(() => {
    if (props && props.onSelect)
    {
      let len = recipeContext?.currentRecipes.selectedMenu.length;
      if (len == recipeContext?.currentRecipes.maxSelection)
        props.onSelect(0);
    }
    }, [recipeContext])

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
