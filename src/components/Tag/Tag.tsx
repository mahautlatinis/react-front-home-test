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
          label={obj.label}
          name={obj.name}
          color={obj.color}
        />
      ))}
    </div>
  );
};
