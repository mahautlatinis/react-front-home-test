import { TagCategoryInterface} from "../../../interfaces/Tag/TagCategory.interface";
import {useEffect, useContext} from "react"
import "./style.css"
import { MenuContext } from "../../../context/MenuContext";

export default function TagItem(props: TagCategoryInterface | null)
{
  const menuContext = useContext(MenuContext)

  const getClassName = (id: number) => {
    if (props?.tagType === "menuTag")
    {
      if (menuContext?.currentRecipes.selectedMenu.some( elem => {
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
      let len = menuContext?.currentRecipes.selectedMenu.length;
      if (len == menuContext?.currentRecipes.maxSelection)
        props.onSelect(0);
    }
    }, [menuContext])

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
