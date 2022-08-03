import { IngredientInterface } from "../../Ingredient/Ingredient.interface";

export interface StepInterface {
  description: string;
  order: number;
  ingredients: IngredientInterface[];
  quantities: number[] | undefined;
  //unit: string[];
};
