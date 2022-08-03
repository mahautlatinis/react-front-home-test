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
    </>
  );
};
