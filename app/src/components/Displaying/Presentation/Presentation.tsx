import React, { Component } from "react";

export default class Presentation extends Component {
	render () {
	return (
		<>
			<div id="presentation-div" style={{paddingLeft: "5%", paddingRight: "5%", marginBottom: "0px"}}>
				<p>Chaque <span style={{color: "green"}}>menu propose différentes recettes </span>adaptées à vos envies et besoins.</p>
				<p>Les tags sélectionnés se trouvent dans la Toolbar ci-dessus et sont indiqués par <span style={{color: "green"}}>la couleur verte.</span></p>
				<p>Vous pouvez <span style={{color: "#EE4B2B"}}>déselectionner</span> les tags depuis la <span>toolbar ou depuis l'espace de contrôle dédié.</span></p>
				<p>En revanche, vous pouvez les <span style={{color: "green"}}>sélectionner</span> uniquement depuis l'espace de contrôle.</p>
			</div>
		</>);
	}
}
