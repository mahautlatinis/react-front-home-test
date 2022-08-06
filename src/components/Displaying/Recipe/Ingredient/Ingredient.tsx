import IngredientItem from "./IngredientItem/IngredientItem";
import {IngredientItemProps,  IngredientsProps } from "../../../../interfaces/Ingredient/Ingredient.interface";
import "./style.css"
import { RecipeItemInterface } from "../../../../interfaces/Recipe/Recipe.interface"



export default function Ingredient(props: IngredientsProps)
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
          prefix={item.prefix}
        />)}
    </ul>
    </>
  );
};
