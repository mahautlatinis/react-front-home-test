import IngredientItem from "./IngredientItem/IngredientItem";
import {IngredientInterface} from "../../interfaces/Ingredient/Ingredient.interface";
import "./style.css"

interface IngredientProps {
  ingredients?: IngredientInterface[]
}

export default function Ingredient(props: IngredientProps)
{
  return (
    <>
      {/*{props.ingredients &&
        props.ingredients.map((ingredient) => 
          <IngredientItem ingredient={ingredient} />
        )}*/}
    </>
  );
};
