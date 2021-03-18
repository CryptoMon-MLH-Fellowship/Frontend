import React, {useContext, useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import Avatar from "../../components/profile/index";
import Cards from "../../components/cards/index";
import {GameContext} from "../../context/GameContext";
import Battleart from '../../assets/battle.svg'
import Crown from '../../assets/crown.svg'
import Cross from '../../assets/cross.svg'
import "./style.css";
const Index = () => {
    const value = useContext(GameContext);
    const [monphrase, setmonphrase] = useState("Begining the fight")

    const phraseGen = (mon) =>{
      const phrase = [`${mon} just dealt damage !`, `${mon} did a critical damage!`, `${mon} has doged the attack!`, `${mon}'s health is very low !`,`${mon} uses a special attack !`, `${mon}'s attack was ineffective !`,`${mon} is poisoned !`,`${mon} is evolving!`,`${mon} just dealt damage !`,`${mon} has recovered it's health` ]

      setmonphrase(phrase[Math.floor(Math.random() * 10)])
      
      setTimeout(() => {
        phraseGen(value.selectedCard[0].name)
      }, 3000);

    }

    useEffect(() => {
      phraseGen(value.selectedCard[0].name)
    }, [])

    return ( <> <div
        className="battle__container mt-5 d-flex ml-auto mr-auto justify-content-center align-content-center">
        <div className="player__container d-flex align-content-center ">
            <div className="player__profile mt-auto mb-auto m-4">
                <Avatar/>
            </div>
            <div className="player__card">
                <div
                    id={value.selectedCard[0].ID}
                    className={`card PlaymonCard ${value.selectedCard[0].shiny
                    ? "shiny"
                    : null}`}>
                    <div
                        className="win d-flex flex-column justify-content-center align-content-center">
                        <img className="win__img" src={Crown}></img>
                        <p>70+</p>
                    </div>
                    <img
                        className="m-4"
                        src={`https://pokeres.bastionbot.org/images/pokemon/${value.selectedCard[0].ID}.png`}></img>
                    <span className="card__name play__card--size">{value.selectedCard[0].name}</span>
                    <span className="card__name play__card--size">XP : {value.selectedCard[0].xp}</span>
                </div>
            </div>
        </div>

        <div
            className="battle__art m-4 d-flex justify-content-center align-content-center">
            <img src={Battleart}></img>
        </div>

        <div className="opponent__container d-flex align-content-center ">
            <div className="opponent__card">
                <div
                    id={value.selectedCard[0].ID}
                    className={`card PlaymonCard ${value.selectedCard[0].shiny
                    ? "shiny"
                    : null}`}>
                    <div
                        className="loose d-flex flex-column justify-content-center align-content-center">
                        <img className="win__img" src={Cross}></img>
                    </div>
                    <img
                        className="m-4"
                        src={`https://pokeres.bastionbot.org/images/pokemon/${value.selectedCard[0].ID}.png`}></img>
                    <span className="card__name play__card--size">{value.selectedCard[0].name}</span>
                    <span className="card__name play__card--size">XP : {value.selectedCard[0].xp}</span>
                </div>
            </div>
            <div className="opponent__profile mt-auto mb-auto m-4">
                <Avatar/>
            </div>
        </div>
    </div> 
    <div class = "color-controls" > 
      <p className="d-flex justify-content-center align-item-center ">
          Calculating <div class="dot-pulse ml-4 mt-3"></div>
      </p> 
      <div class = "color-controls-button-container "> 
        <p>{monphrase}</p> 
      </div>
    </div> 
      </>)
}

export default Index
