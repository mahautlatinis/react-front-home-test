import { TagInterface } from "../../interfaces/Tag/Tag.interface"

export const summer: TagInterface = {
  id: 1,
  label: "summer",
  //name: {
  //  fr: "été",
  //  en: "summer",
  //},
  type: "saison"
  //color: "yellow",
};

export const vegan: TagInterface = {
  id: 2,
  //name: {
  //  fr: "vegan",
  //  en: "vegan",
  //},
  type: "diet",
  label: "vegan"
  //color: "green",
};

export const appetizer: TagInterface = {
  id: 3,
  //name: {
  //  fr: "entrée",
  //  en: "appetizer",
  //},
  type: "plateType",
  label: "entrées"

  //color: "purple",
};

export const dessert: TagInterface = {
  id: 4,
  //name: {
  //  fr: "dessert",
  //  en: "appetizer",
  //},
  label: "dessert",
  type: "plateType",
  //color: "#e320bd",
};

export const autumn: TagInterface = {
  id: 5,
  label: "automne",
  type: "saison"
  //name: {
  //  fr: "automne",
  //  en: "autumn",
  //},
  //type: "saison",
  //color: "orange",
};

export const winter: TagInterface = {
  id: 6,
  label: "hiver",
  type: "saison"
  //name: {
  //  fr: "hiver",
  //  en: "winter",
  //},
  //type: "saison",
  //color: "blue",
};

export const tagList: TagInterface[] = [
  summer,
  winter,
  dessert,
  appetizer,
  autumn,
  vegan,
];
