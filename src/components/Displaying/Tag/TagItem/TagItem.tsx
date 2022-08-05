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

  useEffect(() => {
    //Permet de sélectionner automatiquement "Toutes" si tous les tags sont sélectionnés
    }, [menuContext, recipeContext])

  return (
    <ul className="tags">
        <button
          className={props && menuContext && menuContext?.getClassName.getClassName(props.id, props.tagType ?  props.tagType : "") ? "selected" : "tag"}
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
