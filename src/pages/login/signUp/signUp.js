import React from 'react';
import './signup.css';
import signUpAvatar from '../../../assets/SignUpAvatar.png'
import loginScreen from '../index'


function SignUp (){
    return (
        <>
        
        <div class="signup-box">
            <div class="signUpAvatar">
                <img src={signUpAvatar} class="signUpAvatar" alt="signUpAvatar" />
            </div>
            <div class="credentials">

            <div class="Name">
                <text>
                    Name
                </text>
                <div class="form-input">
                    <input type="text" name="name" placeholder="Enter Your Name"></input>
                </div>


            </div>
            <div class="UserId">
                <text>
                    User Id
                </text>

                <div class="form-input">
                    <input type="text" name="userid" placeholder="Enter User Id"></input>
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
                    <a href={loginScreen}>
                    <button class="button">LOGIN</button>
                    </a>
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

export default SignUp;