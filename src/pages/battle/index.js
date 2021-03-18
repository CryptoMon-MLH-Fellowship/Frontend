import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "../../components/profile/index";
import Cards from "../../components/cards/index";
import { GameContext } from "../../context/GameContext";
import Battleart from "../../assets/battle.svg";
import Crown from "../../assets/crown.svg";
import Cross from "../../assets/cross.svg";
import "./style.css";
import { soliditySha3 } from "web3-utils";
const Index = () => {
	const value = useContext(GameContext);
	const [monphrase, setmonphrase] = useState("Begining the fight");
	const [winner, setWinner] = useState(-1);

	const phraseGen = (mon) => {
		const phrase = [
			`${mon} just dealt damage!`,
			`${mon} did a critical damage!`,
			`${mon} has dodged the attack!`,
			`${mon}'s health is very low!`,
			`${mon} uses a special attack!`,
			`${mon}'s attack was ineffective!`,
			`${mon} is poisoned!`,
			`${mon} just dealt damage!`,
			`${mon} has recovered its health`,
		];

		setmonphrase(phrase[Math.floor(Math.random() * 9)]);

		setTimeout(() => {
			const randomNumber = Math.floor(Math.random() * 10);
			const name =
				randomNumber < 5 ? value.battleDetails[0].challengerMon.name : value.battleDetails[0].opponentMon.name;
			phraseGen(name);
		}, 1500);
	};

	useEffect(() => {
		phraseGen(value.battleDetails[0].challengerMon.name);
		console.log(value.battleDetails[0]);

		const challengeHash = soliditySha3(
			value.battleDetails[0].challenger.address,
			value.battleDetails[0].opponent.address
		);

		value.contract[0].events.AnnounceWinner({ filter: { _challengeHash: challengeHash } }, async (err, event) => {
			try {
				if (err) {
					console.error("An error has occurred!", err);
					return;
				}
				console.log("ANNOUNCED!", event.returnValues);
				setWinner(event.returnValues._winnerMon);
				console.log(event.returnValues._winnerMon);
				setTimeout(() => {
					value.battleInProgress[1](false);
				}, 5000);
			} catch (err) {
				console.error("An error has occurred!", err);
				return;
			}
		});
	}, []);

	return (
		<>
			<div className="battle__container mt-5 d-flex ml-auto mr-auto justify-content-center align-content-center">
				<div className="player__container d-flex align-content-center ">
					<div className="player__profile mt-auto mb-auto m-4">
						<div className="profile">
							<img className="profile__image" src={value.battleDetails[0].challenger.avatar}></img>
						</div>
						<div className="profile__name mt-3 ">
							{value.battleDetails[0].challenger.name.split(" ")[0]}
						</div>
					</div>
					<div className="player__card">
						<div id={value.selectedCard[0].ID} className={`card PlaymonCard`}>
							{winner == -1 ? null : (
								<div
									className={`${
										winner == value.battleDetails[0].challengerMon.id ? "win" : "loose"
									} d-flex flex-column justify-content-center align-content-center`}
								>
									<img
										className="win__img"
										src={winner == value.battleDetails[0].challengerMon.id ? Crown : Cross}
									></img>
								</div>
							)}
							<img
								className="m-4"
								src={`https://pokeres.bastionbot.org/images/pokemon/${value.battleDetails[0].challengerMon.pokemonId}.png`}
							></img>
							<span className="card__name play__card--size">
								{value.battleDetails[0].challengerMon.name}
							</span>
							<span className="card__name play__card--size">
								XP : {value.battleDetails[0].challengerMon.xp}
							</span>
						</div>
					</div>
				</div>

				<div className="battle__art m-4 d-flex justify-content-center align-content-center">
					<img src={Battleart}></img>
				</div>

				<div className="opponent__container d-flex align-content-center ">
					<div className="opponent__card">
						<div id={value.selectedCard[0].ID} className={`card PlaymonCard`}>
							{winner == -1 ? null : (
								<div
									className={`${
										winner == value.battleDetails[0].opponentMon.id ? "win" : "loose"
									} d-flex flex-column justify-content-center align-content-center`}
								>
									<img
										className="win__img"
										src={winner == value.battleDetails[0].opponentMon.id ? Crown : Cross}
									></img>
								</div>
							)}
							<img
								className="m-4"
								src={`https://pokeres.bastionbot.org/images/pokemon/${value.battleDetails[0].opponentMon.pokemonId}.png`}
							></img>
							<span className="card__name play__card--size">
								{value.battleDetails[0].opponentMon.name}
							</span>
							<span className="card__name play__card--size">
								XP : {value.battleDetails[0].opponentMon.xp}
							</span>
						</div>
					</div>
					<div className="opponent__profile mt-auto mb-auto m-4">
						<div className="profileContainer d-flex flex-column align-items-center justify-content-center mt-4">
							<div className="profile">
								<img className="profile__image" src={value.battleDetails[0].opponent.avatar}></img>
							</div>
							<div className="profile__name mt-3 ">
								{value.battleDetails[0].opponent.name.split(" ")[0]}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="color-controls">
				<p className="d-flex justify-content-center align-item-center ">
					{winner == -1 ? (
						<>
							Calculating
							<div class="dot-pulse ml-4 mt-3"></div>
						</>
					) : (
						"Battle completed!"
					)}
				</p>
				<div class="color-controls-button-container ">
					<p>
						{winner == -1
							? monphrase
							: winner == value.battleDetails[0].challengerMon.id
							? `${value.battleDetails[0].challenger.name} won!`
							: `${value.battleDetails[0].opponent.name} won!`}
					</p>
				</div>
			</div>
		</>
	);
};

export default Index;
