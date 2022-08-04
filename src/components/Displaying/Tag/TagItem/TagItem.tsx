import { MenuTagInterface} from "../../../../interfaces/Tag/MenuTag.interface";
import {useEffect, useContext} from "react"
import { MenuContext } from "../../../../context/MenuContext";
import { RecipeContext } from "../../../../context/RecipeContext";
import "./style.css"

export default function TagItem(props: MenuTagInterface | null)
{
  const menuContext = useContext(MenuContext)
  const recipeContext = useContext(RecipeContext)

  const getClassName = (id: number) => {
    if (props?.tagType === "menuTag")
    {
      if (menuContext?.currentMenues.selectedMenu && menuContext?.currentMenues.selectedMenu.some( elem => {
        if (elem == id)
          return true}))
      {
        return true
      }
      else
        return false
    }
    else if (props?.tagType == "recipeTag")
    {
      if (recipeContext?.currentRecipes.selectedRecipes && recipeContext?.currentRecipes.selectedRecipes.some( elem => {
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
    if (props && props.onSelect && props.tagType == "menuTag")
    {
      let len = menuContext?.currentMenues.selectedMenu && menuContext?.currentMenues.selectedMenu.length;
      if (len && len == menuContext?.currentMenues.maxSelection)
        props.onSelect(0);
    }
    else if (props && props.onSelect && props.tagType == "recipeTag")
    {
      let len = recipeContext?.currentRecipes.selectedRecipes && recipeContext?.currentRecipes.selectedRecipes.length;
      //console.log("len is " + len + "and max selection is " + recipeContext?.currentRecipes.maxSelection);
      if (len && len == recipeContext?.currentRecipes.maxSelection)
      {
        props.onSelect(0);
        //console.log("max atteint");
      }
    }
    }, [menuContext, recipeContext])

  return (
    <>
        <button
          className={props && getClassName(props.id) ? "selected" : "tag"}
          onClick={() => {
            if (props && props.onSelect && props.tagType=="menuTag")
              props.onSelect(props.id)
            else if (props && props.onSelect && props.tagType=="recipeTag")
              props.onSelect(props.id)
            }
        }>{props && props.name ? props.name : ""}
        </button>
    </>
  );
};
