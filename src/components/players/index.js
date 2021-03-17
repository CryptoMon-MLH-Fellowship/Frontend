import React, { useState, useContext, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { soliditySha3 } from "web3-utils";
import { GameContext } from "../../context/GameContext";
import "./style.css";

const Index = () => {
	const value = useContext(GameContext);
	const selectedCard = value.selectedCard[0].selected;
	const [modalShow, setModalShow] = useState(false);
	const [selectedPlayer, setSelectedPlayer] = useState();

	const [challenger, setChallenger] = useState();
	const [acceptModalShow, setAcceptModalShow] = useState(false);

	useEffect(() => {
		value.contract[0].events.NewChallenge({ filter: { _opponent: value.account[0] } }, async (err, event) => {
			try {
				if (err) {
					console.error("An error has occurred!", err);
					return;
				}
				if (event.returnValues._opponent !== value.account[0]) return;
				const challengerAddress = event.returnValues._challenger;
				const challenger = await value.contract[0].methods.players(challengerAddress).call();

				setChallenger({ ...challenger, address: challengerAddress });
				setAcceptModalShow(true);
			} catch (err) {
				console.error("An error has occurred!", err);
				return;
			}
		});
		value.contract[0].events.ChallengeReady(async (err, event) => {
			try {
				if (err) {
					console.error("An error has occurred!", err);
					return;
				}
				fetchChallengeReadyPlayers();
			} catch (err) {
				console.error("An error has occurred!", err);
				return;
			}
		});
		const fetchChallengeReadyPlayers = async () => {
			const addresses = await value.contract[0].methods.getChallengeReadyPlayers().call();
			console.log(addresses);

			const promises = addresses.map((player) => value.contract[0].methods.players(player).call());

			const players = await Promise.all(promises);

			for (let i = 0; i < players.length; ++i) {
				players[i].address = addresses[i];
			}

			value.challengeReadyPlayers[1](players);
		};
		fetchChallengeReadyPlayers();
	}, []);

	const challenge = async (opponent) => {
		try {
			setSelectedPlayer(opponent);
			setModalShow(true);

			const challengeHash = soliditySha3(value.account[0], opponent.address);

			value.contract[0].events.AcceptChallenge(
				{ filter: { _challengeHash: challengeHash } },
				async (err, event) => {
					try {
						if (err) {
							console.error("An error has occurred!", err);
							return;
						}
						console.log("ACCEPTED!", event.returnValues);
					} catch (err) {
						console.error("An error has occurred!", err);
						return;
					}
				}
			);

			value.contract[0].events.AnnounceWinner(
				{ filter: { _challengeHash: challengeHash } },
				async (err, event) => {
					try {
						if (err) {
							console.error("An error has occurred!", err);
							return;
						}
						console.log("ANNOUNCED!", event.returnValues);
					} catch (err) {
						console.error("An error has occurred!", err);
						return;
					}
				}
			);

			await value.contract[0].methods
				.challenge(opponent.address, value.cardForBattle[0])
				.send({ from: value.account[0] });
		} catch (err) {
			console.log(err);
		}
	};

	const accept = async () => {
		try {
			const challengeHash = soliditySha3(challenger, value.account[0]);
			value.contract[0].events.AnnounceWinner(
				{ filter: { _challengeHash: challengeHash } },
				async (err, event) => {
					try {
						if (err) {
							console.error("An error has occurred!", err);
							return;
						}
						console.log(event.returnValues);
					} catch (err) {
						console.error("An error has occurred!", err);
						return;
					}
				}
			);
			console.log(challenger.address);
			await value.contract[0].methods
				.accept(challenger.address, value.cardForBattle[0])
				.send({ from: value.account[0] });
		} catch (err) {
			throw err;
		}
	};

	return (
		<div className="monCardContainer d-flex justify-content-center">
			<div className="monCards d-flex justify-content-center align-items-center flex-wrap mt-4">
				{value.challengeReadyPlayers[0]?.map((item, index) =>
					item.address === value.account[0] ? null : (
						<div
							id={index}
							className={`${
								selectedPlayer?.address === item.address ? "card--selected" : null
							} playercard monCard d-flex flex-column justify-content-center align-items-center`}
							onClick={() => challenge(item)}
						>
							<img className="playercard__img" src={item.avatar}></img>
							<span className="playercard__name">{item.name}</span>
						</div>
					)
				)}
			</div>

			<Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">Awaiting response!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>You have successfully challenged {selectedPlayer.name}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setModalShow(false)} className="modal_button">
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={acceptModalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">Incoming challenge!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>You have been challenged by {challenger?.name}!</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={accept} className="modal_button">
						Accept
					</Button>
					<Button onClick={() => setAcceptModalShow(false)} className="modal_button">
						Reject
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Index;
