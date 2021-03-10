import React from 'react';
import './style.css';
//import cards from '../assets/cards.png';
import card1 from '../../../assets/spread-cards/card (1).png';
import card2 from '../../../assets/spread-cards/card (2).png';
import card3 from '../../../assets/spread-cards/card (3).png';
import cardrow from '../../../assets/spread-cards/card (4).png';

function Cards (){
    return (
        <>

    <div class="spread-cards">
        {/*<div class="image">
            <img src={cards} alt="spread-cards" />
    </div>*/}
        <div class="spread-cards__card-row">

            <div class="card-row__card">
                <span class="card__img">
                    <img src={card1} alt="selected-card"/>
                </span> 
            </div>

            <div class="card-row__card">
                <span class="card__img">
                    <img src={card2} alt="card-2"/>
                </span> 
            </div>

            <div class="card-row__card">
                <span class="card__img">
                    <img src={card3} alt="card-3"/>
                </span>
            </div>
        </div>

    
        <div class="spread-cards__card-row">
            <span class="card__img">
                <img src={cardrow} alt="card-row" />
            </span> 
        </div>
    </div>

        </>
    );
}

export default Cards;