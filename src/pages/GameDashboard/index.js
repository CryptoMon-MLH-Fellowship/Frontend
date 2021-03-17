import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Avatar from "../../components/profile/index";
import Statistics from "../../components/statistics/index";
import Cards from "../../components/cards/index";
import Player from "../../components/players/index";
import SideNav from "../../components/SideNav/index";

import Dashboard from "../Dashboard";
import { GameContext } from "../../context/GameContext";

import CardsBox from "../../components/cardsBox/packet/index";
import Login from "../login";

const GameDashboard = (prop) => {
	const value = useContext(GameContext);

	return (
		<Container>
			{value.registered[0] ? (
				<Dashboard />
			) : (
				<Row>
					<Login />
				</Row>
			)}
		</Container>
	);
};

export default GameDashboard;
