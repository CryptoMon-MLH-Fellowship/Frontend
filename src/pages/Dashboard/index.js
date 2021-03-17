import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "../../components/profile/index";
import Statistics from "../../components/statistics/index";
import Cards from "../../components/cards/index";
import Player from "../../components/players/index";
import SideNav from "../../components/SideNav/index";
import CardsBox from "../../components/cardsBox/packet/index";

import { GameContext } from "../../context/GameContext";

import "./style.css";

const Dashboard = (prop) => {
	const value = useContext(GameContext);
	useEffect(() => {
		const loadPlayer = async () => {
			const playerData = await value.contract[0].methods.players(value.account[0]).call();
			value.player[1](playerData);

			const mons = await value.contract[0].methods.getCryptoMonsByOwner(value.account[0]).call();
			value.cards[1](mons);
		};

		loadPlayer();
	}, []);

	return (
		<>
			<Row className="flex-nowrap">
				<Col className="column profile-column" xs="3">
					<Avatar />
					<Statistics value={prop.value} />
				</Col>
				<Col className="column" xs="7">
					{value.readyBattle ? <Cards /> : <Player />}
				</Col>
				<Col className="column column--nobg" xs="2">
					<SideNav />
				</Col>
			</Row>
			<Row>
				{value.cardBoxopened[0] ? null : (
					<CardsBox cardBoxopened={value.cardBoxopened[0]} setCardBoxopened={value.cardBoxopened[1]} />
				)}
			</Row>
		</>
	);
};

export default Dashboard;
