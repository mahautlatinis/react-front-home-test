import MenuTag from "../../Filtering/Tag/MenuTag/MenuTag";
import RecipeTag from "../../Filtering/Tag/RecipeTag/RecipeTag";

export default function Tag()
{
  return (
      <div className="tag-div">
        <MenuTag />
        <RecipeTag />
      </div>
  );
}
