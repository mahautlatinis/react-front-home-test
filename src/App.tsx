import { useState } from "react";
import Recipe from "./components/Recipe/Recipe";
import RecipeItem from "./components/Recipe/RecipeItem/RecipeItem";

//import {
//  allRecipes,
//  sugarRecipes,
//  summerRecipes,
//  dessertRecipes,
//  noEggsRecipes,
//  chocolateRecipes,
//  autumnRecipes,
//  veganRecipes,
//  chocolateDessertRecipes,
//} from "./assets/mock_data/RecipeData";

import { pavlova } from "./assets/mock_data/RecipeData";

import "./assets/styles/styles.css"

//import { TagList } from "./components/Tagfilter/Taglist";
//import { tagList } from "./assets/mock_data/TagData";

export default function App() {
  const [filter, setFilter] = useState<string>("all");
  return (
    <div className="App">
      Liste des recettes
      {/*<TagList tags={tagList} />
      <button onClick={() => setFilter("chocolate")}>Chocolat</button>
      <button onClick={() => setFilter("sugar")}>Sucre</button>
      <button onClick={() => setFilter("summer")}>Eté</button>
      <button onClick={() => setFilter("dessert")}>Dessert</button>
      <button onClick={() => setFilter("chocolate dessert")}>
        dessert chocolat
      </button>
      <button onClick={() => setFilter("eggs free")}>Sans Oeufs</button>
      <button onClick={() => setFilter("autumn")}> Autumn</button>
      <button onClick={() => setFilter("vegan")}> Vegan</button>
      */}
      {/*{filter === "all" && 
        <Recipe recipes={allRecipes} />}*/}

      <RecipeItem
        name={pavlova.name}
        description={pavlova.description}
        imageURL={pavlova.imageURL}
        ingredients={pavlova.ingredients}
        steps={pavlova.steps}
        tags={pavlova.tags}
      />

      {/*{filter === "sugar" && <Recipe recipes={sugarRecipes} />}
      {filter === "summer" && <Recipe recipes={summerRecipes} />}
      {filter === "dessert" && <Recipe recipes={dessertRecipes} />}
      {filter === "chocolate dessert" && (
        <Recipe recipes={chocolateDessertRecipes} />
      )}
      {filter === "eggs free" && <Recipe recipes={noEggsRecipes} />}
      {filter === "chocolate" && <Recipe recipes={chocolateRecipes} />}
      {filter === "autumn" && <Recipe recipes={autumnRecipes} />}
      {filter === "vegan" && <Recipe recipes={veganRecipes} />}*/}
    </div>
  );
}
