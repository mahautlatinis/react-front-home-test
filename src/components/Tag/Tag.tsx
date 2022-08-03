import { useEffect, useState} from "react";
import TagItem from "./TagItem/TagItem";
import {TagInterface} from "../../interfaces/Tag/Tag.interface"
import { TagCategoryInterface } from "../../interfaces/Tag/TagCategory.interface";
import MenuTag from "./MenuTag/MenuTag";
import RecipeTag from "./RecipeTag/RecipeTag";
import { menuTagList } from "../../assets/mock_data/TagData";

import "./style.css"

export default function Tag()
{
  const [selectedMenu, setSelectedMenu] = useState<number[]>([0]);
  const [menuTags, setMenuTagList] = useState<TagCategoryInterface[]>(menuTagList)

  //A developper après
  const [maxSelection, setMaxSelection] = useState<number>(3)

  useEffect( () => {
    if (selectedMenu.length == maxSelection)
    {
      //console.log("Max selected");
      setSelectedMenu([0]);
      //TODO: Faire un message toastify?
    }
  }, [selectedMenu])

  //const getNumberMenus = (menus: TagCategoryInterface[]) => {
  //  return (menuTags.length)
  //}

  const handleSelect = (id: number) => {
    //console.log(id)
    
    if (selectedMenu.includes(id))
    {
      //console.log("Popping out of the array")
      const newArray: number[] = selectedMenu.filter(selected => { return selected != id});
      setSelectedMenu(newArray);
    }
    else
    {
      //console.log("Adding to the array");
      let newArray: number[] = selectedMenu;
      if (selectedMenu.includes(0))
      {
        newArray = [id]
        setSelectedMenu(newArray);
      }
      else if (id == 0)
      {
        newArray = [0];
        setSelectedMenu(newArray);
      }
      else {
        newArray = [...selectedMenu, id];
        setSelectedMenu(newArray);
      }
    }
  }

  return (
    <div className="tag-div">
      <MenuTag 
        onSelectMenuTag={handleSelect}
        selectedMenu={selectedMenu}
        menuTags={menuTags}
      />
      <RecipeTag />
    </div>
  );
};
