import { MenuTagInterface} from "../../../../interfaces/Tag/MenuTag.interface";
import {useEffect, useContext} from "react"
import { MenuContext } from "../../../../context/MenuContext";
import { RecipeContext } from "../../../../context/RecipeContext";

//Material UI
import { Chip } from "@material-ui/core";
import { green } from "@material-ui/core/colors";


export default function TagItem(props: MenuTagInterface | null)
{
  //Récupération des différents contextes
  const menuContext = useContext(MenuContext)
  const recipeContext = useContext(RecipeContext)

  useEffect(() => {
    //Permet de sélectionner automatiquement "Toutes" si tous les tags sont sélectionnés
    }, [menuContext, recipeContext])

  const handleClick = () => {
    if ((props && props?.tagType === "recipeTag") || (props && props?.tagType === "headerRecipe"))
                {
                  if (recipeContext?.onSelectRecipe.handleSelection && props)
                    recipeContext?.onSelectRecipe.handleSelection(props.id)
                }
                else if ((props && props?.tagType === "menuTag") || (props && props?.tagType === "headerMenu"))
                {
                  if (menuContext?.onSelect.handleSelection && props)
                    menuContext?.onSelect.handleSelection(props.id)
                }
  }

  return (
    <ul className="tags">
      {((props && props.tagType === "headerRecipe") || (props && props.tagType &&  props.tagType === "headerMenu")) ?
      <Chip 
        style={{backgroundColor: green[300]}}
        label={props && props.name ? props.name : ""} 
        onDelete={handleClick}
      /> :
      <>
        <Chip 
            label={props && props.name ? props.name : ""} 
            onClick={handleClick}
            variant="outlined"
            color={props && menuContext && menuContext?.getClassName.getClassName(props.id, props.tagType ?  props.tagType : "headerMenu") ? "primary" : "secondary"}
        />
      </>}
    </ul>
  );
};
