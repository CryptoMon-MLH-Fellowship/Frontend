import React, { useEffect, useContext } from "react";
import "./style.css";
import { GameContext } from "../../context/GameContext";

const Index = () => {
	const value = useContext(GameContext);
	return (
		<div className="statContainer d-flex flex-column align-items-center justify-content-center mt-5">
			<div className="level d-flex flex-column align-items-center p-5 justify-content-center">
				<span className="level__tag">Lv.</span>
				<span className="level__data">{Math.floor(value.player[0]?.winCount / 5) + 1}</span>
			</div>
			<div className="level level--won d-flex flex-column align-items-center mt-4 mb-4 p-5 justify-content-center">
				<span className="level__tag level__tag--won">WON</span>
				<span className="level__data ">{value.player[0]?.winCount}</span>
			</div>

			<div className="level level--lost d-flex flex-column align-items-center mb-4 p-5 justify-content-center">
				<span className="level__tag level__tag--lost">LOST</span>
				<span className="level__data ">{value.player[0]?.lossCount}</span>
			</div>
		</div>
	);
};

export default Index;
