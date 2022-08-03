import { IngredientInterface } from "../Ingredient/Ingredient.interface";
import { StepInterface } from "./Step/Step.interface";
import { TagInterface } from "../Tag/Tag.interface"

export interface RecipeInterface {
  name: string;
  description: string;
  imageURL: string;
  ingredients: IngredientInterface[];
  steps: StepInterface[];
  tags: TagInterface[];
}
