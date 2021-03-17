import React, { useContext, useState } from "react";
import "./style.css";
import defaultAvatar from "../../assets/loginPokemon.png";
import SignUp from "./signUp/signUp.js";
import { GameContext } from "../../context/GameContext";

function Login() {
	const value = useContext(GameContext);
	const [name, setName] = useState();
	const [message, setMessage] = useState("SIGN UP");

	const handleRegister = async () => {
		setMessage("Loading...");
		value.contract[0].events.NewCryptoMon({ filter: { _player: value.account[0] } }, async (err, event) => {
			if (err) {
				console.error("An error has occurred!", err);
				return;
			}
			console.log("EVENT", event);
			value.registered[1](true);
		});
		const receipt = await value.contract[0].methods
			.createUser(name, `https://avatars.dicebear.com/api/male/${name.split(" ")[0]}.svg?background=%230000ff`)
			.send({ from: value.account[0] });
	};

	return (
		<>
			<div class="login-box">
				<div class="defaultAvatar">
					<img src={defaultAvatar} class="defaultAvatar" alt="defaultPikachu" />
				</div>
				<div class="credentials">
					<div class="UserId">
						<text>Name</text>

						<div class="form-input">
							<input
								type="text"
								name="name"
								placeholder="Enter Name"
								value={name}
								onChange={({ target: { value } }) => setName(value)}
							></input>
						</div>
					</div>
				</div>

				<button class="button" onClick={handleRegister}>
					{message}
				</button>
			</div>
		</>
	);
}

export default Login;
