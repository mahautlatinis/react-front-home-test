import { useState } from "react";
import { TagCategoryInterface } from "../../../interfaces/Tag/TagCategory.interface";
import "./style.css"

export default function TagItem(props: TagCategoryInterface)
{
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <>
        <button
          className="tag"
          onClick={() => props.onSelectTagCategory(props.id)}
          >{props.name}</button>
    </>
  );
};
