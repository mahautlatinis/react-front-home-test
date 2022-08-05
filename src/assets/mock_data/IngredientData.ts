import { IngredientInterface} from "../../interfaces/Ingredient/Ingredient.interface";

export const chocolate: IngredientInterface= {
  name: "chocolat",
  names: "chocolats",
  type: "confeseries",
  imgURL: "https://www.lechocolat-alainducasse.com/1830-product_cover_sm/tablette-origine-noir-bolivie-75.jpg",
  unit: "kg",
  prefix: "de",
};

export const sugar: IngredientInterface = {
  name: "sucre",
  names: "sucre",
  type:"sucres et edulcorants",
  imgURL: "https://www.beghin-say.fr/sites/default/files/dp_vanille_650g_2019_new.png",
  unit: "kg",
  prefix: "de",
};

export const butter: IngredientInterface = {
  name: "beurre",
  names: "beurre",
  type: "crèmerie et produits frais",
  imgURL: "https://media.auchan.fr/MEDIASTEP149565805_0x0/B2CD/",
  unit: "kg",
  prefix: "de",
};

export const flour: IngredientInterface = {
  name: "farine",
  names: "farine",
  type: "aides à la pâtisserie",
  imgURL: "https://www.farine-biologique.fr/wp-content/uploads/2019/08/farine-de-froment.png",
  unit: "kg",
  prefix: "de",
};

export const pear: IngredientInterface = {
  name: "poire",
  names: "poires",
  type: "fruits",
  imgURL: "https://www.coteaux-nantais.com/sites/coteaux-nantais.com/files/comice.png",
  unit: "kg",
  prefix: "de"
};

export const egg: IngredientInterface = {
  name: "oeuf",
  names: "oeufs",
  type: "crèmerie et produits frais",
  imgURL: "https://lepetitcircuit.fr/505-large_default/oeufs-biologiques-x6.jpg",
  unit: "unité",
  prefix: "d'"
};

export const redFruits: IngredientInterface = {
  name: "fruits rouges",
  names: "fruits rouges",
  type: "fruit",
  imgURL: "https://www.as-productrice.fr/sites/default/files/product_type/fruits-rouge.png",
  unit: "kg",
  prefix: "de",
};

export const almondPowder: IngredientInterface = {
  name: "poudre d'amande",
  names: "poudre d'amande",
  type: "aides à la pâtisserie",
  imgURL: "https://d1e3z2jco40k3v.cloudfront.net/-/media/vah18/produits/800x800/amandes_en_poudre.png?rev=3a33e19ceaea4c77bbcf57a69be77139&vd=20210809T134020Z&hash=AF8E4A55F2D399738F53DF0AC21950C9",
  unit: "kg",
  prefix: "de",
};

export const cream: IngredientInterface = {
  name: "crème liquide",
  names: "crème liquide",
  type: "crèmerie et produits frais",
  imgURL: "https://media.auchan.fr/MEDIASTEP132248486_0x0/B2CD/",
  unit: "cl",
  prefix: "de",
};

export const salad: IngredientInterface = {
  name: "salade",
  names: "salade",
  type: "salades et légumes",
  imgURL: "https://www.plaineduroussillon.com/wp-content/uploads/2017/06/Salade.png",
  unit: "g",
  prefix: "de"
};

export const feta: IngredientInterface = {
  name: "feta",
  names: "feta",
  type: "fromage",
  imgURL: "https://www.toctocgourmet.com/1658/feta-tranche.jpg",
  unit: "g",
  prefix: "de",
};

export const cucumber: IngredientInterface = {
  name: "concombre",
  names: "concombres",
  type: "légumes",
  imgURL: "https://www.lemarchedeleopold.com/wp-content/uploads/2020/05/03b4ba246adbf9595551c44aba326ef6.png",
  unit: "unités",
  prefix: "de"
};

//Added
export const apple: IngredientInterface = {
  name: "pomme",
  names: "pommes",
  type: "fruits",
  imgURL: "https://www.coteaux-nantais.com/sites/coteaux-nantais.com/files/braeburn.png",
  unit: "unités",
  prefix: "de"
}

export const vinegar: IngredientInterface = {
  name: "vinaigre",
  names: "vinaigre",
  type: "huiles et vinaigres",
  imgURL: "https://martin-pouret.com/221-large_default/vinaigre-d-orleans-de-vin-blanc-au-jus-d-agrumes.jpg",
  unit: "cl",
  prefix: "de"
}

export const olive: IngredientInterface = {
  name: "olive",
  names: "olives",
  type: "épicerie salée",
  imgURL: "https://www.pereolive.com/wp-content/uploads/2019/12/pere-olive-olive-piquante-1024x1024.png",
  unit: "g",
  prefix: "d\'"
}

export const mockIngredients = [sugar, flour, redFruits, chocolate, egg, butter, almondPowder, pear, cream, salad, cucumber, feta, apple, vinegar, olive]
