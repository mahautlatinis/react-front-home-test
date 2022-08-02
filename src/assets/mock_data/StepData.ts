import { StepInterface} from "../../interfaces/Step/Step.interface"

import {
  butter,
  chocolate,
  cream,
  egg,
  flour,
  redFruits,
  sugar,
} from "./IngredientData";

export const stepsPavlova: StepInterface[] = [
  {
    description: "Préparer la meringue française.",
    ingredients: [sugar, egg],
    quantities: [100, 3],
    //unit: ["g", "unit"],
    order: 1,
  },
  {
    description: "Préparer la chantilly.",
    ingredients: [sugar, cream],
    quantities: [50, 20],
    //unit: ["g", "cl"],
    order: 2,
  },
  {
    description: "Disposer les fruits rouges sur le dessus.",
    ingredients: [redFruits],
    quantities: [100],
    //unit: ["g"],
    order: 3,
  },
];

export const stepsFondantChocolat: StepInterface[] = [
  {
    description: "Faire fondre le chocolat avec le beurre au bain-marie.",
    order: 1,
    ingredients: [chocolate, butter],
    quantities: [200, 150]
  },
  {
    description:
      "Pendant ce temps,séparer les jaunes des blancs d'oeufs. Monter ces derniers en neige ferme.",
    order: 2,
    ingredients: [egg],
    quantities: [3]
  },
  //{
  //  description: "Ajouter les jaunes d'oeufs au mélange beurre chocolat.",
  //  order: 3,
  //},
  {
    description: "Incorporer le sucre et la farine puis les blancs d'oeufs.",
    order: 3,
    ingredients: [flour, sugar],
      //{ ingredient: flour, quantity: 50, unit: "g" },
      //{ ingredient: sugar, quantity: 100, unit: "g" },
    quantities: [50, 100]
  }
  //{
  //  description:
  //    "Verser la préparation dans un moule beurré et fariné. Enfourner 15mn à 180°.",
  //  order: 5,
  //},
];

export const stepsTarteAuxPoires: StepInterface[] = [
  {
    description: "Préparer la pâte sablée.",
    order: 1,
    ingredients: [butter, flour, egg],
    quantities: [200, 150, 1]
  },
  {
    description:
      "Pour la garniture, travailler le beurre et le sucre au batteur électrique.",
    order: 2,
    ingredients: [butter, sugar],
    quantities: [100, 100]
  }
  //{
  //  description:
  //    "Incorporer les oeufs puis ajouter les amandes moulues et la farine",
  //  order: 4,
  //},
  //{
  //  description:
  //    "Verser la préparation sur le fond de la pâte. Disposer les poires. Enfourner 50 mn à 180°",
  //  order: 5,
  //},
];
