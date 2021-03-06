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
import Battle from "../battle/index";

const GameDashboard = (prop) => {
	const value = useContext(GameContext);
	if(value.registered[0] == null)
		return null
	return (
		<>
			{value.registered[0] ? (
				value.battleInProgress[0] ? (
					<Battle />
				) : (
					<Dashboard />
				)
			) : (
				<Row>
					<Login />
				</Row>
			)}
		</>
	);
};

export default GameDashboard;
