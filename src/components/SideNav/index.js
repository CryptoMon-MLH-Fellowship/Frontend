import React, { useState, useContext } from "react";
import BtnLogo from "../buttonLogo/index";
import { Modal, Button } from "react-bootstrap";
import { Icon, InlineIcon } from "@iconify/react";
import gameControllerRetroSolid from "@iconify/icons-teenyicons/game-controller-retro-solid";
import swordFill from "@iconify/icons-ri/sword-fill";
import "./style.css";
import { GameContext } from "../../context/GameContext";

const Index = () => {
	const value = useContext(GameContext);
	const [modalShow, setModalShow] = useState(false);

	const checkSelectedCard = () => {
		if (value.cardForBattle[0] === -1) {
			setModalShow(true);
			return;
		}
		value.openBattle();
	};

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

				<BtnLogo onClick={checkSelectedCard} readyBattle={value.readyCard ? true : false}>
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
				<span className="counter__data">
					{value.readyBattle ? value.cards[0].length : Math.max(0, value.challengeReadyPlayers[0].length - 1)}
				</span>
			</div>

			<Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">Action Required</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Please select a CryptoMon for battle.</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setModalShow(false)} className="modal_button">
						<span>Cancel</span>
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Index;
