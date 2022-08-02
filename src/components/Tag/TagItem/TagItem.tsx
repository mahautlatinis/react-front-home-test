import { useState } from "react";
import { TagInterface } from "../../../interfaces/Tag/Tag.interface"
import "./style.css"

export default function TagItem(props: TagInterface)
{
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <div className="tag-div">
      {props.label}
    </div>
  );
};
