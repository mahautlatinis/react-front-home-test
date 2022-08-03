import { useEffect, useState, useContext} from "react";
import MenuTag from "./MenuTag/MenuTag";
import RecipeTag from "./RecipeTag/RecipeTag";

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
