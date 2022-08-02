import { RecipeInterface } from "../../interfaces/Recipe/Recipe.interface";
import RecipeItem from "./RecipeItem/RecipeItem";
import "./style.css"

export default function Recipe(props: RecipeInterface[]) 
{
  return (
    <div className="recipe-list">
        {/*{recipes.map((obj) => (
          <RecipeItem name="" description="" imageURL="" ingredients={[]} steps={[]} tags={[]}/>
        ))}*/}
    </div>
  );
};
