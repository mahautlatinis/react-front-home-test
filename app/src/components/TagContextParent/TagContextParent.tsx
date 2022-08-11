import React from "react"
import "../../assets/styles/styles.css"
import Tag from "../Displaying/Tag/Tag";
import Recipe  from "../Displaying/Recipe/Recipe"
import Header from "../Displaying/Header/Header";
import Presentation from "../Displaying/Presentation/Presentation";
import Footer from "../Displaying/Footer/Footer";
import { MenuContextProvider } from "../../context/MenuContext";
import { RecipeContextProvider } from "../../context/RecipeContext";

export default function TagContextParent()
{
		return (
		<>
			<div style={{textAlign: "center"}}>
				<MenuContextProvider>
					<RecipeContextProvider>
						<Header />
						<Presentation />
						<Tag />
						<Recipe />
						<Footer />
					</RecipeContextProvider>
				</MenuContextProvider>
					<br/>
				</div>
		</>)
	//}
}
