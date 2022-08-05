import { IngredientInterface } from "../Ingredient/Ingredient.interface";
import { StepInterface } from "./Step/Step.interface";
import { RecipeTagInterface } from "../Tag/RecipeTag.interface"

//export interface RecipeInterface {
//}

export interface RecipeItemInterface {
  name: string;
  description: string;
  imageURL: string;
  ingredients: IngredientInterface[];
  steps: StepInterface[];
  tags: RecipeTagInterface[];
}
