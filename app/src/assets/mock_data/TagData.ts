import { RecipeTagInterface } from "../../interfaces/Tag/RecipeTag.interface"
import { MenuTagInterface } from "../../interfaces/Tag/MenuTag.interface";

export const summer: RecipeTagInterface = {
  id: 1,
  label: "été",
  //Added properties
  menuId: 1,
  menuName: "saison"
};

export const fall: RecipeTagInterface = {
  id: 2,
  label: "automne",
  menuId: 1,
  menuName: "saison"
};

export const winter: RecipeTagInterface = {
  id: 3,
  label: "hiver",
  menuId: 1,
  menuName: "saison"
};

export const spring: RecipeTagInterface = {
  id: 4, 
  label: "printemps",
  menuId: 1,
  menuName: "saison"
}

export const diet: RecipeTagInterface = {
  id: 5,
  label: "diet",
  menuId: 3,
  menuName: "régimes particuliers"
}


export const vegan: RecipeTagInterface = {
  id: 6,
  label: "vegan",
  menuId: 3,
  menuName: "régimes particuliers"
};

export const appetizer: RecipeTagInterface = {
  id: 7,
  label: "entrées",
  menuId: 2,
  menuName: "traditionnel"
};

export const dessert: RecipeTagInterface = {
  id: 8,
  label: "desserts",
  menuId: 2,
  menuName: "traditionnel"
};

//Dirty modifications
export const seasons: MenuTagInterface = {
  id: 1,
  name: "saison",
  tags: [winter, summer, spring, fall]
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
}

export const allRecipesTag: RecipeTagInterface[] = [
  {
    id: 1,
    label: "été",
    menuId: 1,
    menuName: "saison"
  },
  {
    id: 2,
    label: "automne",
    menuId: 1,
    menuName: "saison"
  },
  {
    id: 3,
    label: "hiver",
    menuId: 1,
    menuName: "saison"
  },
  {
    id: 4,
    label: "printemps",
    menuId: 1,
    menuName: "saison"
  },
  {
    id: 5,
    label: "diet",
    menuId: 3,
    menuName: "régimes particuliers"
  },
  {
    id: 6,
    label: "vegan",
    menuId: 3,
    menuName: "régimes particuliers"
  },
  {
    id: 7,
    label: "entrées",
    menuId: 2,
    menuName: "traditionnel"
  },
  {
    id: 8,
    label: "desserts",
    menuId: 2,
    menuName: "traditionnel"
  }
]

export const menuTagList: MenuTagInterface[] = [seasons, traditional, specialDiet]
export const RecipeTagList: RecipeTagInterface[] = [diet, spring, summer, fall, winter, vegan, appetizer, dessert]
