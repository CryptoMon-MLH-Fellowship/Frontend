import React, { useState, createContext } from "react";
import Avatar from "../assets/avatars/avatar (2).png";
import Cards from "../assets/pokemon.png";
export const GameContext = createContext();

export const GameProvider = (props) => {
	const [contract, setContract] = useState();
	const [account, setAccount] = useState();
	const [registered, setRegistered] = useState(false);
	const [player, setPlayer] = useState();
	const [username, setUsername] = useState("Dev");
	const [userAvatar, setUserAvatar] = useState(Avatar);
	const [statistics, setStatistics] = useState({ level: "00", won: "00", lost: "00" });
	const [cards, setCards] = useState([]);
	const [readyBattle, setReadyBattle] = useState(true);
	const [readyCard, setReadyCard] = useState(false);
	const [cardBoxopened, setCardBoxopened] = useState(false);
	const [selectedCard, setSelectedCard] = useState({ ID: null, selected: false });
	const [cardForBattle, setCardForBattle] = useState(-1);
	const [challengeReadyPlayers, setChallengeReadyPlayers] = useState([]);

	const openBattle = async () => {
		console.log(player.challengeReady);
		if (player.challengeReady) {
			console.log(readyBattle);
			readyBattle ? setReadyCard(true) : setReadyCard(false);
			return readyBattle ? setReadyBattle(false) : setReadyBattle(true);
		} else {
			const receipt = await contract.methods.setChallengeReady().send({ from: account });
			console.log(receipt);
			if (receipt.status === true) {
				setPlayer({ ...player, challengeReady: true });
				readyBattle ? setReadyCard(true) : setReadyCard(false);
				return readyBattle ? setReadyBattle(false) : setReadyBattle(true);
			}
		}
	};

	const getSelectedCard = (cardId) => {
		setSelectedCard({ ID: cardId, selected: true });
		console.log(selectedCard);
	};

	return (
		<GameContext.Provider
			value={{
				contract: [contract, setContract],
				account: [account, setAccount],
				statistics: [statistics, setStatistics],
				registered: [registered, setRegistered],
				player: [player, setPlayer],
				username: username,
				userAvatar: userAvatar,
				cards: [cards, setCards],
				openBattle,
				readyBattle,
				readyCard,
				selectedCard: [selectedCard, setSelectedCard],
				getSelectedCard,
				cardBoxopened: [cardBoxopened, setCardBoxopened],
				cardForBattle: [cardForBattle, setCardForBattle],
				challengeReadyPlayers: [challengeReadyPlayers, setChallengeReadyPlayers],
			}}
		>
			{props.children}
		</GameContext.Provider>
	);
};
