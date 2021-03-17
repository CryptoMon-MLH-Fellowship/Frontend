import React, { useState, useContext } from "react";
import BtnLogo from "../buttonLogo/index";
import { Icon, InlineIcon } from "@iconify/react";
import gameControllerRetroSolid from "@iconify/icons-teenyicons/game-controller-retro-solid";
import swordFill from "@iconify/icons-ri/sword-fill";
import "./style.css";
import { GameContext } from "../../context/GameContext";

const Index = () => {
	const value = useContext(GameContext);

	return (
		<div className="sidenav d-flex flex-column justify-content-between">
			<div className="sidenav__buttons">
				<BtnLogo onClick={value.openBattle} readyBattle={value.readyBattle ? true : false}>
					<Icon
						icon={gameControllerRetroSolid}
						style={{
							color: "#ffffff",
							fontSize: "80px",
						}}
					/>
				</BtnLogo>

				<BtnLogo onClick={value.openBattle} readyBattle={value.readyCard ? true : false}>
					<Icon
						icon={swordFill}
						style={{
							color: "#ffffff",
							fontSize: "80px",
						}}
					/>
				</BtnLogo>
			</div>

			<div className="sidenav__counter d-flex flex-column align-items-center justify-content-center">
				<span className="counter__tag">{value.readyBattle ? "Cards" : "Players"}</span>
				<span className="counter__data">{value.cards[0].length}</span>
			</div>
		</div>
	);
};

export default Index;
