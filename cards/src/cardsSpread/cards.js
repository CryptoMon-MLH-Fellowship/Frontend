import React from 'react';
import './cards.css';
import cards from '../assets/cards.png';

function Cards (){
    return (
        <>

    <div class="spread-cards">
        <div class="image">
            <img src={cards} alt="spread-cards" />
        </div>
    </div>

        </>
    );
}


export default Cards;
