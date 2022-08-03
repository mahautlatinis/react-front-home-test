import { IngredientInterface} from "../../interfaces/Ingredient/Ingredient.interface";

export const chocolate: IngredientInterface= {
  name: "chocolat",
  names: "chocolats",
  type: "confeseries",
  unit: "kg",
  prefix: "de",
};

export const sugar: IngredientInterface = {
  name: "sucre",
  names: "sucre",
  type:"sucres et edulcorants",
  unit: "kg",
  prefix: "de",
};

export const butter: IngredientInterface = {
  name: "beurre",
  names: "beurre",
  type: "crèmerie et produits frais",
  unit: "kg",
  prefix: "de",
};

export const flour: IngredientInterface = {
  name: "farine",
  names: "farine",
  type: "aides à la pâtisserie",
  unit: "kg",
  prefix: "de",
};

export const pear: IngredientInterface = {
  name: "poire",
  names: "poires",
  type: "fruits",
  unit: "kg",
  prefix: "de"
};

export const egg: IngredientInterface = {
  name: "oeuf",
  names: "oeufs",
  type: "crèmerie et produits frais",
  unit: "unité",
  prefix: "d'"
};

export const redFruits: IngredientInterface = {
  name: "fruits rouges",
  names: "fruits rouges",
  type: "fruit",
  unit: "kg",
  prefix: "de",
};

export const almondPowder: IngredientInterface = {
  name: "poudre d'amande",
  names: "poudre d'amande",
  type: "aides à la pâtisserie",
  unit: "kg",
  prefix: "de",
};

export const cream: IngredientInterface = {
  name: "crème liquide",
  names: "crème liquide",
  type: "crèmerie et produits frais",
  unit: "cl",
  prefix: "de",
};

export const salad: IngredientInterface = {
  name: "salade",
  names: "salade",
  type: "salades et légumes",
  unit: "g",
  prefix: "de"
};

export const feta: IngredientInterface = {
  name: "feta",
  names: "feta",
  type: "fromage",
  unit: "g",
  prefix: "de",
};

export const cucumber: IngredientInterface = {
  name: "concombre",
  names: "concombres",
  type: "légumes",
  unit: "unités",
  prefix: "de"
};

//Added
export const apple: IngredientInterface = {
  name: "pomme",
  names: "pommes",
  type: "fruits",
  unit: "unités",
  prefix: "de"
}

export const vinegar: IngredientInterface = {
  name: "vinaigre",
  names: "vinaigre",
  type: "huiles et vinaigres",
  unit: "cl",
  prefix: "de"
}

export const olive: IngredientInterface = {
  name: "olive",
  names: "olives",
  type: "épicerie salée",
  unit: "g",
  prefix: "d\'"
}

export const mockIngredients = [sugar, flour, redFruits, chocolate, egg, butter, almondPowder, pear, cream, salad, cucumber, feta, apple, vinegar, olive]
