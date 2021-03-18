import React, { useEffect, useContext } from "react";
import { GameContext } from "../../context/GameContext";
import "./style.css";

const Index = () => {
	const value = useContext(GameContext);
	const selectedCard = value.selectedCard[0].selected;
	const sendCard = (e) => {
		if (value.selectedCard[1].ID != null) {
			document.getElementById(value.selectedCard[1].ID).classList.remove("card--selected");
		}

		value.cardForBattle[1](e.currentTarget.id);
		value.selectedCard[1].ID = e.currentTarget.id;
		value.getSelectedCard(value.selectedCard[1].ID);
		document.getElementById(value.selectedCard[1].ID).classList.add("card--selected");
	};
	return (
		<div className="monCardContainer d-flex justify-content-center">
			<div className="monCards d-flex justify-content-center align-items-center flex-wrap mt-4">
				{value.cards[0].map((item, index) => {
					return (
						<div id={item.pokemonId} className={`card monCard ${item.shiny ? "shiny" : null}`} onClick={sendCard}>
							<img
								className="m-4"
								src={`https://pokeres.bastionbot.org/images/pokemon/${item.pokemonId}.png`}
							></img>
							<span className="card__name">{item.name}</span>
							<span className="card__name">XP : {item.xp}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Index;
