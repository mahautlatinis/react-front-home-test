import './style.css';
import { IngredientInterface} from "../../../../../interfaces/Ingredient/Ingredient.interface";

interface IngredientItemProps {
  //ingredient?: IngredientInterface
  //quantity?: number,
  //unit?: string
  name?: string;
	names?: string;
  imgURL?: string;
	type?: string;
	unit?: string;
	prefix?: string;
}

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
