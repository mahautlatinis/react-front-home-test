import { useState} from "react";
import TagItem from "./TagItem/TagItem";
import {TagInterface} from "../../interfaces/Tag/Tag.interface"
import { TagCategoryInterface } from "../../interfaces/Tag/TagCategory.interface";
import MenuTag from "./MenuTag/MenuTag";
import RecipeTag from "./RecipeTag/RecipeTag";

import "./style.css"

export default function Tag()
{
  const [selectedMenu, setSelectedMenu] = useState<TagCategoryInterface>();

  const handleSelect = (id: number) => {
    console.log(id)
  }

  return (
    <div className="tag-div">
      <MenuTag 
        onSelectMenuTag={handleSelect}
      />
      <RecipeTag />
    </div>
  );
};
