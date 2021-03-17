import React, { useEffect, useContext } from "react";
import Web3 from "web3";
import GameDashboard from "./pages/GameDashboard/index";
import { GameContext } from "./context/GameContext";
import { address, abi } from "./assets/data/contractData";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	const value = useContext(GameContext);

	const loadWeb3 = async () => {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			await window.ethereum.enable();
		}
		if (window.web3) {
			window.web3 = new Web3(window.web3.currentProvider);
		} else {
			window.alert("please use metamask");
		}
	};

	const setContract = async () => {
		const web3 = window.web3;
		const accounts = await web3.eth.getAccounts();
		value.account[1](accounts[0]);

		const contract = new web3.eth.Contract(abi, address);
		value.contract[1](contract);
	};

	const loadPlayer = async () => {
		const web3 = window.web3;
		const accounts = await web3.eth.getAccounts();

		const contract = new web3.eth.Contract(abi, address);
		const player = await contract.methods.players(accounts[0]).call();
		value.registered[1](player.verified);
	};

	useEffect(() => {
		const loadBlockchain = async () => {
			await loadWeb3();
			await setContract();
			await loadPlayer();
		};

		loadBlockchain();
	}, []);

	return <GameDashboard></GameDashboard>;
};

export default App;
