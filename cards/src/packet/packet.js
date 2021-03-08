import React from 'react';
import './packet.css';
import opener from '../assets/opener.png';
import box from '../assets/box.png'
//import cards from '../assets/cards.png';
import arrow from '../assets/Arrow 1.png';
//import peepingcards from '../assets/peepingcards1.png';

function Packet (){
    return (
        <>

        
        <div class="body">

        <center><div id="text">Click to open your first packet!</div></center>
        <div id="arrow">
            <img src={arrow} class="arrow" alt="pointer" />
        </div>
        
        <div class="opener">
            <img src={opener} class="opener" alt="opener" />
        </div>

        {/*<div class="peeping-cards">
        <img src={peepingcards} class="peeping-cards" alt="cards-inside" />

    </div>*/}
        <a href="spread-cards" target="_blank">
        <div class="cards-packet">
            <img src={box} class="cards-packet" alt="box-of-cards" />
        </div>
        </a>
        
        {/*<div class="spread-cards">
        <div class="image">
            <img src={cards} alt="spread-cards" />
        </div>
        </div>*/}

        </div>
        </>
    );
}

export default Packet;