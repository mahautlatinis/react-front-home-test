import IngredientItem from "./IngredientItem/IngredientItem";
import {IngredientInterface} from "../../../../interfaces/Ingredient/Ingredient.interface";
import "./style.css"
import { RecipeItemInterface } from "../../../../interfaces/Recipe/Recipe.interface"

interface IngredientProps {
  //ingredients?: IngredientInterface[]
  //recipeId?: number,
  //recipeName?: string,
  list:  IngredientInterface[],
}

//TODO: reprendre un hide/show
//TODO: a centrer
export default function Ingredient(props: IngredientProps)
{
  return (
    <>
    <h2>Ingrédients</h2>
    <ul className="ingredientslist">
      {props && props.list && props.list.map((item) =>
        <IngredientItem 
          name={item.name}
          names={item.names}
          type={item.type}
          unit={item.unit}
          imgURL={item.imgURL}
          prefix={item.prefix}
        />)}
    </ul>
    </>
  );
};
