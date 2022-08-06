import { StepInterface} from "../../interfaces/Recipe/Step/Step.interface"
import {sugar, egg, cream, chocolate, butter, flour, pear, redFruits, almondPowder, salad, feta, cucumber, apple, vinegar, olive} from "./IngredientData"

export const stepsPavlova: StepInterface[] = [
  {
    description: "Préparer la meringue française.",
    ingredients: [sugar, egg],
    quantities: [100, 3],
    order: 1,
  },
  {
    description: "Préparer la chantilly.",
    ingredients: [sugar, cream],
    quantities: [50, 20],
    order: 2,
  },
  {
    description: "Disposer les fruits rouges sur le dessus.",
    ingredients: [redFruits],
    quantities: [100],
    order: 3,
  }
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
  {
    description: "Ajouter les jaunes d'oeufs au mélange beurre chocolat.",
    order: 3,
    ingredients: [],
    quantities: []
  },
  {
    description: "Incorporer le sucre et la farine puis les blancs d'oeufs.",
    order: 4,
    ingredients: [flour, sugar],
    quantities: [50, 100]
  },
  {
    description:
      "Verser la préparation dans un moule beurré et fariné. Enfourner 15mn à 180°.",
    order: 5,
    ingredients: [],
    quantities: []
  }
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
  },
  {
    description:
      "Incorporer les oeufs puis ajouter les amandes moulues et la farine",
    order: 3,
    ingredients: [],
    quantities: []
  },
  {
    description:
      "Verser la préparation sur le fond de la pâte. Disposer les poires. Enfourner 50 mn à 180°",
    order: 4,
    ingredients: [],
    quantities: []
  }
];

// Added
export const stepsWaldorfSalad: StepInterface[] = [
  {
    description: "Couper les pommes en fins quartiers.",
    order: 1,
    ingredients: [apple],
    quantities: [3]
  },
  {
    description: "Préparer l'assaisonnement de la salade avec le vinaigre. Ajouter la salade.",
    order: 2,
    ingredients: [vinegar, salad],
    quantities: [10, 200]
  },
  {
    description: "Mélangez la salade, l'assaisonnement et les quartiers de pommes. C'est prêt ✨ !",
    order: 3,
    ingredients: [],
    quantities: []
  }
]

export const stepsOliveCake: StepInterface[] = [
  {
    description: "Disposer la farine en faisant un puit puis mélanger les oeufs",
    order: 1,
    ingredients: [flour, egg],
    quantities: [150, 3]
  },
  {
    description: "Une fois la pâte prête, ajouter le beurre fondu et les olives",
    order: 2,
    ingredients: [butter, olive],
    quantities: [100, 150]
  },
  {
    description: "Disposer dans un plat, enfourner à 200 degrés pendant 20 minutes. Vous pouvez le servir chaud ou froid 🤩",
    order: 3,
    ingredients: [],
    quantities: []
}]
