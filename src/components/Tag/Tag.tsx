import TagItem from "./TagItem/TagItem";
import {TagInterface} from "../../interfaces/Tag/Tag.interface"
import "./style.css"

export default function Tag(props: TagInterface[])
{
  return (
    <div className="tag">
      {props.map((obj) => (
        <TagItem 
          id={obj.id}
          type={obj.type}
          label={obj.label}
          //color={obj.color}
        />
      ))}
    </div>
  );
};
