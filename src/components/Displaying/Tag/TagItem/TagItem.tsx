import { MenuTagInterface} from "../../../../interfaces/Tag/MenuTag.interface";
import {useEffect, useContext} from "react"
import { MenuContext } from "../../../../context/MenuContext";
import "./style.css"

export default function TagItem(props: MenuTagInterface | null)
{
  const menuContext = useContext(MenuContext)

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
    
  }

  useEffect(() => {
    if (props && props.onSelect)
    {
      let len = menuContext?.currentMenues.selectedMenu && menuContext?.currentMenues.selectedMenu.length;
      if (len && len == menuContext?.currentMenues.maxSelection)
        props.onSelect(0);
    }
    }, [menuContext])

  return (
    <>
        <button
          className={props && getClassName(props.id) ? "selected" : "tag"}
          onClick={() => {
            if (props && props.onSelect && props.tagType=="menuTag")
              props.onSelect(props.id)
            }
        }>{props && props.name ? props.name : ""}
        </button>
    </>
  );
};
