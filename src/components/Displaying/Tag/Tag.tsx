import { useEffect, useState, useContext} from "react";
import MenuTag from "../../Filtering/Tag/MenuTag/MenuTag";
import RecipeTag from "../../Filtering/Tag/RecipeTag/RecipeTag";

import "./style.css"

export default function Tag()
{
  return (
      <div className="tag-div">
        <MenuTag />
        {/*<RecipeTag />*/}
      </div>
  );
}
