import { IngredientItemProps } from "../../Ingredient/Ingredient.interface";

export interface StepInterface {
  description: string;
  order: number;
  ingredients: IngredientItemProps[];
  quantities: number[] | undefined;
};

export interface StepProps {
  list?: StepInterface[]
}
