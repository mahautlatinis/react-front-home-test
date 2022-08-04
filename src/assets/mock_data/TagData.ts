import { RecipeTagInterface } from "../../interfaces/Tag/RecipeTag.interface"
import { MenuTagInterface } from "../../interfaces/Tag/MenuTag.interface";

export const summer: RecipeTagInterface = {
  id: 1,
  label: "été",
};

export const vegan: RecipeTagInterface = {
  id: 2,
  label: "vegan",
};

export const appetizer: RecipeTagInterface = {
  id: 3,
  label: "entrées",
};

export const dessert: RecipeTagInterface = {
  id: 4,
  label: "dessert",
};

export const fall: RecipeTagInterface = {
  id: 5,
  label: "automne",
};

export const winter: RecipeTagInterface = {
  id: 6,
  label: "hiver",
};

//Added
export const spring: RecipeTagInterface = {
  id: 7, 
  label: "printemps",
}

export const diet: RecipeTagInterface = {
  id: 8,
  label: "diet",
}

//Dirty modifications
export const seasons: MenuTagInterface = {
  id: 1,
  name: "saison",
  tags: [winter, summer, spring, fall]
  //tags: [{id:6, label: "winter"}, {id:1, label: "summer"}, {id: 7, label:"spring"}, {id: 5, label: "fall"}],
}

export const traditional: MenuTagInterface = {
  id: 2,
  name: "traditionnel",
  tags: [appetizer, dessert],
}

export const specialDiet: MenuTagInterface = {
  id: 3,
  name: "régimes particuliers",
  tags: [vegan, diet]
  //tags: {{id: 2, label: "vegan"}, {id: 8, label: "diet"}},
}

//Dirty
export const allRecipesTag: RecipeTagInterface[] = [
  {
    id: 1,
    label: "été",
  },
  {
    id: 2,
    label: "vegan",
  },
  {
    id: 3,
    label: "entrées",
  },
  {
    id: 4,
    label: "dessert",
  },
  {
    id: 5,
    label: "automne",
  },
  {
    id: 6,
    label: "hiver",
  },
  {
    id: 7,
    label: "printemps",
  },
  {
    id: 8,
    label: "diet",
  }
]

export const menuTagList: MenuTagInterface[] = [seasons, traditional, specialDiet]
export const RecipeTagList: RecipeTagInterface[] = [diet, spring, summer, fall, winter, vegan, appetizer, dessert]
