import { MenuTagInterface} from "../../../../interfaces/Tag/MenuTag.interface";
import {useEffect, useContext} from "react"
import { MenuContext } from "../../../../context/MenuContext";
import { RecipeContext } from "../../../../context/RecipeContext";
import "./style.css"

export default function TagItem(props: MenuTagInterface | null)
{
  //Récupération des différents contextes
  const menuContext = useContext(MenuContext)
  const recipeContext = useContext(RecipeContext)

  //Permet de générer une classe spéciale si le tag est sélectionné
  //TODO: a refacto, mettre dans la classe parent
  const getClassName = (id: number) => {
    if (props?.tagType === "menuTag")
    {
      if (menuContext?.currentMenues.selectedMenu && menuContext?.currentMenues.selectedMenu.some( elem => {
        if (elem == id)
          return true}))
        return true
      else
        return false
    }
    else if (props?.tagType == "recipeTag")
    {
      if (recipeContext?.currentRecipes.selectedRecipes && recipeContext?.currentRecipes.selectedRecipes.some( elem => {
        if (elem == id)
          return true}))
        return true
      else
        return false
    }
    return false
  }

  useEffect(() => {
    //Permet de sélectionner automatiquement "Toutes" si tous les tags sont sélectionnés
    }, [menuContext, recipeContext])

  return (
    <ul className="tags">
        <button
          className={props && getClassName(props.id) ? "selected" : "tag"}
          onClick={() => {
              if (props && props?.tagType == "recipeTag" || props?.tagType == "headerRecipe")
              {
                if (recipeContext?.onSelectRecipe.handleSelection && props)
                  recipeContext?.onSelectRecipe.handleSelection(props.id)
              }
              else if (props && props?.tagType=="menuTag" || props?.tagType == "headerMenu")
              {
                if (menuContext?.onSelect.handleSelection && props)
                  menuContext?.onSelect.handleSelection(props.id)
              }
            }}>{props && props.name ? props.name : ""}
        </button>
    </ul>
  );
};
