//import { useState } from "react";
import { TagCategoryInterface } from "../../../interfaces/Tag/TagCategory.interface";
import "./style.css"

export default function TagItem(props: TagCategoryInterface)
{
  return (
    <>
        <button
          className={props.isSelected == true ? "selected" : "tag"}
          onClick={() => props.onSelectTagCategory(props.id)}
          >{props.name}</button>
    </>
  );
};
