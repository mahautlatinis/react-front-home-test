import { RecipeItemInterface } from "../../interfaces/Recipe/Recipe.interface";
import { stepsFondantChocolat,stepsPavlova, stepsTarteAuxPoires, stepsWaldorfSalad, stepsOliveCake, stepsHamRoll, stepsZucchiniGratin, stepsZucchiniSalad} from "./StepData";
import {sugar, egg, cream, chocolate, butter, flour, pear, redFruits, almondPowder, salad, feta, cucumber, olive, ham, zucchini, vinegar} from "./IngredientData"
import { appetizer, fall, dessert, summer, vegan, winter, spring, diet} from "./TagData";

export const pavlova: RecipeItemInterface= {
  name: "Pavlova",
  description: "La pavlova est un dessert à base de meringue et de fruits",
  imageURL:
    "https://www.mycake.fr/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg",
  ingredients: [sugar, flour, redFruits, egg, cream],
  steps: stepsPavlova,
  tags: [summer],
};

export const fondantChocolat: RecipeItemInterface = {
  name: "Fondant au chocolat",
  description:
    "Le fondant au chocolat est un gâteau au chocolat qui fond en bouche",
  imageURL: "https://lacuisinedegeraldine.fr/wp-content/uploads/2020/12/DSC00413-scaled.jpg",
  ingredients: [chocolate, egg, flour, butter, sugar],
  steps: stepsFondantChocolat,
  tags: [dessert, winter],
};

export const pearPie: RecipeItemInterface = {
  name: "Tarte aux poires",
  description:
    "La tarte au poire est une tarte faite à base d'un appareil à l'amande, d'une pâte sablée et de poires",
  imageURL:
    "https://assets.afcdn.com/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp",
  ingredients: [almondPowder, sugar, butter, flour, pear],
  steps: stepsTarteAuxPoires,
  tags: [dessert],
};

export const waldorfSalad: RecipeItemInterface = {
  name: "Salade Waldorf",
  description: "La salade greque est parfaite pour l'été",
  imageURL:
    "https://assets.afcdn.com/recipe/20190704/94666_w420h420c1cx2689cy1920cxb5378cyb3840.webp",
  ingredients: [salad, cucumber, feta],
  steps: stepsWaldorfSalad,
  tags: [summer, vegan, diet],
};

//Added
export const oliveCake: RecipeItemInterface = {
  name:"Le cake aux olives",
  description: "Le cake aux olives parfait pour le printemps",
  imageURL:
    "https://img-3.journaldesfemmes.fr/FMseEv4OWBADkpClRZdcp0iIArA=/750x500/smart/bb58e69d2891490eb1044d9414e8b2c3/recipe-jdf/10027203.jpg",
  ingredients: [butter, flour, egg, olive],
  steps: stepsOliveCake,
  tags: [diet],
}

export const hamroll: RecipeItemInterface = {
  name:"Roulés au jambon",
  description: "Le délicieux roulé feuilleté au jambon",
  imageURL:
    "https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FCAC.2Fvar.2Fcui.2Fstorage.2Fimages.2Fdossiers-gourmands.2Ftendance-cuisine.2Fjambon-cru-notre-selection-de-recettes-faciles-et-gourmandes-293961.2F3177527-1-fre-FR.2Fjambon-cru-notre-selection-de-recettes-faciles-et-gourmandes.2Ejpg/850x478/quality/90/crop-from/center/roules-feuilletes-au-jambon.jpeg",
  ingredients: [butter, flour, egg, ham],
  steps: stepsHamRoll,
  tags: [appetizer],
}

export const zucchiniGratin: RecipeItemInterface = {
  name:"Gratin de courgettes",
  description: "Le plat parfait de l'automne",
  imageURL:
    "https://n6g3q5q8.rocketcdn.me/wp-content/uploads/2020/08/Gratin-de-courgettes-et-pommes-de-terre-WW.jpg",
  ingredients: [butter, flour, egg, zucchini, cream],
  steps: stepsZucchiniGratin,
  tags: [fall],
}

export const zucchiniSalad: RecipeItemInterface = {
  name:"Salade de courgettes et feta",
  description: "La meilleure salade du printemps",
  imageURL:
    "https://resize.elle.fr/portrait_webp/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/salade-courgettes-citron-et-pignons-3867582/93579212-1-fre-FR/Salade-courgettes-citron-et-pignons.jpg",
  ingredients: [salad, zucchini,feta, vinegar ],
  steps: stepsZucchiniSalad,
  tags: [spring],
}

export const AllRecipes: RecipeItemInterface[] = [
  pavlova,
  fondantChocolat,
  pearPie,
  waldorfSalad,
  oliveCake,
  hamroll,
  zucchiniGratin,
  zucchiniSalad
];

// Pas utilisé, déclaré dans le sujet, modification des types depuis
//export const summerRecipes = AllRecipes.filter((recipe) => {
//  const recipesTags = recipe.tags((tag) => tag.label);
//  return recipesTags.includes("summer");
//});

//export const sugarRecipes: RecipeItemInterface[] =AllRecipes.filter((recipe) => {
//  const ingredientsList: string[] | undefined = recipe.ingredients?.map(
//    (ingredient) => ingredient.name
//  );
//  return ingredientsList && ingredientsList.includes("sucre");
//});

//export const chocolateRecipes:  RecipeItemInterface[] = AllRecipes.filter((recipe) => {
//  const ingredientsList: string[] | undefined = recipe.ingredients?.map(
//    (ingredient) => ingredient.name
//  );

//  return ingredientsList && ingredientsList.includes("chocolat");
//});

//export const dessertRecipes: RecipeItemInterface[] = AllRecipes.filter((recipe) => {
//  const tags: string[] = recipe.tags.map((tag) => tag.label);
//  return tags.includes("dessert");
//});

//export const chocolateDessertRecipes: RecipeItemInterface[] = AllRecipes.filter(
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

//export const noEggsRecipes: RecipeItemInterface[] = AllRecipes.filter((recette) => {
//  const ingredientsString: string[] = recette.ingredients
//    ? recette.ingredients.map((ingredient) => ingredient.name)
//    : [];
//  return !ingredientsString.includes("oeuf");
//});

//export const autumnRecipes: RecipeItemInterface[] = AllRecipes.filter((recette) => {
//  const tagIds = recette.tags.map((tag) => tag.label);
//  return tagIds.includes("autumn");
//});

//export const veganRecipes: RecipeItemInterface[] = AllRecipes.filter((recette) => {
//  const tagIds: string[] = recette.tags.map((tag) => tag.label);
//  return tagIds.includes("vegan");
//});
