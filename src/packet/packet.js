import React from 'react';
import './packet.css';
import opener from '../assets/opener.png';
import box from '../assets/box.png'
import arrow from '../assets/Arrow 1.png';
import Spreadcards from '../cardsSpread';
import './hide';

function Packet (){
    return (
        <>       
        <center>
        <div class="container">
    
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
       
        <div class="cards-packet" onclick="cardsDisplay()">
            <img src={box} class="cards-packet" alt="box-of-cards" />
        </div>
        

       
        </div>

        <div id="spread-cards">
        <Spreadcards />
        </div>

        </center> 
        </>
    );
}

export default Packet;