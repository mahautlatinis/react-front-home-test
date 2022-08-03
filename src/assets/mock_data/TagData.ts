import { TagInterface } from "../../interfaces/Tag/Tag.interface"
import { TagCategoryInterface } from "../../interfaces/Tag/TagCategory.interface";

export const summer: TagInterface = {
  id: 1,
  label: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  color: "yellow"
};

export const vegan: TagInterface = {
  id: 2,
  name: {
    fr: "vegan",
    en: "vegan",
  },
  label: "vegan",
  color: "green"
};

export const appetizer: TagInterface = {
  id: 3,
  name: {
    fr: "entrée",
    en: "appetizer",
  },
  label: "entrées",
  color: "purple"
};

export const dessert: TagInterface = {
  id: 4,
  name: {
    fr: "dessert",
    en: "appetizer",
  },
  label: "dessert",
  color: "#e320bd",
};

export const autumn: TagInterface = {
  id: 5,
  label: "automne",
  name: {
    fr: "automne",
    en: "autumn"
  },
  color: "orange"
};

export const winter: TagInterface = {
  id: 6,
  label: "hiver",
  name: {
    fr: "hiver",
    en: "winter",
  },
  color: "blue",
};

export const tagList: TagInterface[] = [
  summer,
  winter,
  dessert,
  appetizer,
  autumn,
  vegan,
];

//Added
export const spring: TagInterface = {
  id: 7, 
  label: "printemps",
  name: {
    fr: "printemps",
    en: "spring"
  },
  color: "green"
}

export const diet: TagInterface = {
  id: 8,
  label: "régime",
  name: {
    fr: "régime",
    en: "diet"
  },
  color: "purple"
}

export const seasons: TagCategoryInterface = {
  id: 1,
  name: "saison",
  tags: [summer, winter, summer, spring],
  //onSelectTagCategory: () => {},
  //isSelected: false
}

export const traditional: TagCategoryInterface = {
  id: 2,
  name: "traditionnel",
  tags: [appetizer, dessert],
  //onSelectTagCategory: () => {},
  //isSelected: false
}

export const specialDiet: TagCategoryInterface = {
  id: 3,
  name: "régimes particuliers",
  tags: [vegan, diet],
  //onSelectTagCategory: () => {},
  //isSelected: false
}

export const menuTagList: TagCategoryInterface[] = [seasons, traditional, specialDiet]
