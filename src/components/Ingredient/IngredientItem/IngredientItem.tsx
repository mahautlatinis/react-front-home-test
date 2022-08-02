import './style.css';
import { IngredientInterface} from "../../../interfaces/Ingredient/Ingredient.interface";

interface IngredientItemProps {
  ingredient: IngredientInterface
  quantity?: number,
  unit?: string
}

export default function IngredientItem(props: IngredientItemProps)
{
  return (
    <>
      {/*{!props.quantity ? (
        <span>{props.ingredient.name}</span>
      ) : (
        <span>{props.ingredient.name}</span>
      )}*/}
    </>
  );
};
