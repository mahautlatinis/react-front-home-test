import { IngredientItemProps } from "../Ingredient/Ingredient.interface";
import { StepInterface } from "./Step/Step.interface";
import { RecipeTagInterface } from "../Tag/RecipeTag.interface"

export interface RecipeItemInterface {
  id?: number;
  name: string;
  description: string;
  imageURL: string;
  ingredients: IngredientItemProps[];
  steps: StepInterface[];
  tags: RecipeTagInterface[];
}
