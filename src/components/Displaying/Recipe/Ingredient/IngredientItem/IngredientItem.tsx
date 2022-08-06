import './style.css';
import { IngredientItemProps  } from "../../../../../interfaces/Ingredient/Ingredient.interface"


export default function IngredientItem(props: IngredientItemProps)
{
  return (
    <>
    {/*<br/>*/}
      <ul>
        <img src={props.imgURL} className="recipe-image ingredients-image"></img>
        <li className="ingredients-title">{props.name && props.name?.charAt(0).toUpperCase() + props.name?.slice(1)}</li>
      </ul>
      {/*<p>{props.unit} {props.type} </p>*/}
    </>
  );
};
