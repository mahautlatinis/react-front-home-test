import { MenuTagInterface} from "../../../../interfaces/Tag/MenuTag.interface";
import {useEffect, useContext} from "react"
import { MenuContext } from "../../../../context/MenuContext";
import { RecipeContext } from "../../../../context/RecipeContext";
import "./style.css"
import { Chip } from "@material-ui/core";
import { green, blue } from "@material-ui/core/colors";


export default function TagItem(props: MenuTagInterface | null)
{
  //Récupération des différents contextes
  const menuContext = useContext(MenuContext)
  const recipeContext = useContext(RecipeContext)

  useEffect(() => {
    //Permet de sélectionner automatiquement "Toutes" si tous les tags sont sélectionnés
    }, [menuContext, recipeContext])

  //TODO: A reindenter
  const handleClick = () => {
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
  }

  return (
    <ul className="tags">
      {props && props.tagType == "headerRecipe" ?
      <Chip 
        style={{backgroundColor: green[300]}}
        label={props && props.name ? props.name : ""} 
        onDelete={handleClick}
      /> : 
      <Chip 
          label={props && props.name ? props.name : ""} 
          onClick={handleClick}
          color={props && menuContext && menuContext?.getClassName.getClassName(props.id, props.tagType ?  props.tagType : "") ? "primary" : "secondary"}
        />}
    </ul>
  );
};
