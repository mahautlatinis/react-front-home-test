import { RecipeTagInterface } from "../../interfaces/Tag/RecipeTag.interface"
import { MenuTagInterface } from "../../interfaces/Tag/MenuTag.interface";

export const summer: RecipeTagInterface = {
  id: 1,
  label: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  color: "yellow"
};

export const vegan: RecipeTagInterface = {
  id: 2,
  name: {
    fr: "vegan",
    en: "vegan",
  },
  label: "vegan",
  color: "green"
};

export const appetizer: RecipeTagInterface = {
  id: 3,
  name: {
    fr: "entrée",
    en: "appetizer",
  },
  label: "entrées",
  color: "purple"
};

export const dessert: RecipeTagInterface = {
  id: 4,
  name: {
    fr: "dessert",
    en: "appetizer",
  },
  label: "dessert",
  color: "#e320bd",
};

export const autumn: RecipeTagInterface = {
  id: 5,
  label: "automne",
  name: {
    fr: "automne",
    en: "autumn"
  },
  color: "orange"
};

export const winter: RecipeTagInterface = {
  id: 6,
  label: "hiver",
  name: {
    fr: "hiver",
    en: "winter",
  },
  color: "blue",
};

//export const tagList: TagInterface[] = [
//  summer,
//  winter,
//  dessert,
//  appetizer,
//  autumn,
//  vegan,
//];

//Added
export const spring: RecipeTagInterface = {
  id: 7, 
  label: "printemps",
  name: {
    fr: "printemps",
    en: "spring"
  },
  color: "green"
}

export const diet: RecipeTagInterface = {
  id: 8,
  label: "régime",
  name: {
    fr: "régime",
    en: "diet"
  },
  color: "purple"
}

export const seasons: MenuTagInterface = {
  id: 1,
  name: "saison",
  tags: [summer, winter, summer, spring],
  //onSelectTagCategory: () => {},
  //isSelected: false
}

export const traditional: MenuTagInterface = {
  id: 2,
  name: "traditionnel",
  tags: [appetizer, dessert],
  //onSelectTagCategory: () => {},
  //isSelected: false
}

export const specialDiet: MenuTagInterface = {
  id: 3,
  name: "régimes particuliers",
  tags: [vegan, diet],
  //onSelectTagCategory: () => {},
  //isSelected: false
}

export const menuTagList: MenuTagInterface[] = [seasons, traditional, specialDiet]
export const RecipeTagList: RecipeTagInterface[] = [diet, spring, summer, winter, autumn, vegan, appetizer, dessert]
