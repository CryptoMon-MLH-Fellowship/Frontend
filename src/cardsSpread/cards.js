import React from 'react';
import './cards.css';
//import cards from '../assets/cards.png';
import card1 from '../assets/spread-cards/Frame 6.png';
import card2 from '../assets/spread-cards/image 14.png';
import card3 from '../assets/spread-cards/image 15.png';
import cardrow from '../assets/spread-cards/Group 8.png';

function Cards (){
    return (
        <>

    <div class="spread-cards">
        {/*<div class="image">
            <img src={cards} alt="spread-cards" />
    </div>*/}

        <div class="card">
            <span class="card__img">
                <img src={card1} alt="selected-card"/>
            </span> 
        </div>

        <div class="card">
            <span class="card__img">
                <img src={card2} alt="card-2"/>
            </span> 
        </div>

        <div class="card">
            <span class="card__img">
                <img src={card3} alt="card-3"/>
            </span>
        </div>
        

    </div>

    <div class="spread-cards">
        <div class="card-row">
            <span class="card__img">
                <img src={cardrow} alt="card-row" />
            </span> 
        </div>
    </div>

        </>
    );
}

export default Cards;
