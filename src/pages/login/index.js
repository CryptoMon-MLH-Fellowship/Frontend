import React from 'react';
import './style.css';
import defaultAvatar from '../../assets/loginPokemon.png'

function Login (){
    return (
        <>
        
        <div class="login-box">
            <div class="defaultAvatar">
                <img src={defaultAvatar} class="defaultAvatar" alt="defaultPikachu" />
            </div>
            <div class="credentials">
            <div class="UserId">
                <text>
                    User Id
                </text>

                <div class="form-input">
                    <input type="text" name="fname" placeholder="Enter User Id"></input>
                </div>

            </div>

            <div class="Password">
                <text>
                    Password
                </text>

                <div class="form-input">
                    <input type="text" name="passwd" placeholder="Enter Password"></input>
                </div>
            </div>
            </div>

            <div class="buttons">
                <div class="login-button">
                    <button class="button">LOGIN</button>
                </div>
            </div>
            <div class="buttons">
                <div class="signup-button">
                    <button class="button">SIGN UP</button>
                </div>

            </div>
        </div>


        </>
    )
}

export default Login;