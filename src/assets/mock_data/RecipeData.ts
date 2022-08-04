import { RecipeInterface } from "../../interfaces/Recipe/Recipe.interface";
import { stepsFondantChocolat,stepsPavlova, stepsTarteAuxPoires, stepsWaldorfSalad, stepsOliveCake} from "./StepData";
import {sugar, egg, cream, chocolate, butter, flour, pear, redFruits, almondPowder, salad, feta, cucumber, olive, apple, vinegar} from "./IngredientData"
//import { mockIngredients } from "./IngredientData";
import { appetizer, autumn, dessert, summer, vegan, winter, spring, diet} from "./TagData";

export const pavlova: RecipeInterface = {
  name: "Pavlova",
  description: "La pavlova est un dessert à base de meringue et de fruits",
  imageURL:
    "https://www.mycake.fr/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg",
  ingredients: [sugar, flour, redFruits, egg, cream],
  steps: stepsPavlova,
  tags: [summer, dessert],
};

export const fondantChocolat: RecipeInterface = {
  name: "Fondant au chocolat",
  description:
    "Le fondant au chocolat est un gâteau au chocolat qui fond en bouche",
  imageURL:
    "https://www.guydemarle.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0ZvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--333bff76e254e1934153f809f2d9cc2b5967da52/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VWTI5dFltbHVaVjl2Y0hScGIyNXpld2c2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpvR1JWUTZER2R5WVhacGRIbEpJZ3REWlc1MFpYSUdPd2RVT2dsamNtOXdTU0lRTmpBd2VEWXdNQ3N3S3pBR093ZFUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--929a1958a8630156464b089800ca739f1b4570de/fondant-au-chocolat.jpg",
  ingredients: [chocolate, egg, flour, butter, sugar],
  steps: stepsFondantChocolat,
  tags: [dessert, winter],
};

export const pearPie: RecipeInterface = {
  name: "Tarte amandine aux poires",
  description:
    "La tarte au poire est une tarte faite à base d'un appareil à l'amande, d'une pâte sablée et de poires",
  imageURL:
    "https://assets.afcdn.com/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp",
  ingredients: [almondPowder, sugar, butter, flour, pear],
  steps: stepsTarteAuxPoires,
  tags: [dessert, autumn],
};

export const waldorfSalad: RecipeInterface = {
  name: "Salade Waldorf",
  description: "La salade greque est parfaite pour l'été",
  imageURL:
    "https://assets.afcdn.com/recipe/20190704/94666_w420h420c1cx2689cy1920cxb5378cyb3840.webp",
  ingredients: [salad, cucumber, feta],
  steps: stepsWaldorfSalad,
  tags: [appetizer, summer, vegan, diet],
};

export const oliveCake: RecipeInterface = {
  name:"",
  description: "Le cake aux olives parfait pour le printemps",
  imageURL:
    "https://img-3.journaldesfemmes.fr/FMseEv4OWBADkpClRZdcp0iIArA=/750x500/smart/bb58e69d2891490eb1044d9414e8b2c3/recipe-jdf/10027203.jpg",
  ingredients: [butter, flour, egg, olive],
  steps: stepsOliveCake,
  tags: [appetizer, spring, diet],
}

export const allRecipes = [
  pavlova,
  fondantChocolat,
  pearPie,
  waldorfSalad,
  oliveCake
];

// Filtres à reprendre 

//export const summerRecipes = allRecipes.filter((recipe) => {
//  const recipesTags = recipe.tags((tag) => tag.label);
//  return recipesTags.includes("summer");
//});

//export const sugarRecipes: RecipeInterface[] = allRecipes.filter((recipe) => {
//  const ingredientsList: string[] | undefined = recipe.ingredients?.map(
//    (ingredient) => ingredient.name
//  );
//  return ingredientsList && ingredientsList.includes("sucre");
//});

//export const chocolateRecipes:  RecipeInterface[] = allRecipes.filter((recipe) => {
//  const ingredientsList: string[] | undefined = recipe.ingredients?.map(
//    (ingredient) => ingredient.name
//  );

//  return ingredientsList && ingredientsList.includes("chocolat");
//});

//export const dessertRecipes: RecipeInterface[] = allRecipes.filter((recipe) => {
//  const tags: string[] = recipe.tags.map((tag) => tag.label);
//  return tags.includes("dessert");
//});

//export const chocolateDessertRecipes: RecipeInterface[] = allRecipes.filter(
//  (recipe) => {
//    const tagsString: string[] = recipe.tags.map((tag) => tag.label);
//    const ingredientString: string[] = recipe.ingredients
//      ? recipe.ingredients.map((ingredient) => ingredient.name)
//      : [];
//    return (
//      tagsString.includes("dessert") && ingredientString.includes("chocolat")
//    );
//  }
//);

//export const noEggsRecipes: RecipeInterface[] = allRecipes.filter((recette) => {
//  const ingredientsString: string[] = recette.ingredients
//    ? recette.ingredients.map((ingredient) => ingredient.name)
//    : [];
//  return !ingredientsString.includes("oeuf");
//});

//export const autumnRecipes: RecipeInterface[] = allRecipes.filter((recette) => {
//  const tagIds = recette.tags.map((tag) => tag.label);
//  return tagIds.includes("autumn");
//});

//export const veganRecipes: RecipeInterface[] = allRecipes.filter((recette) => {
//  const tagIds: string[] = recette.tags.map((tag) => tag.label);
//  return tagIds.includes("vegan");
//});
