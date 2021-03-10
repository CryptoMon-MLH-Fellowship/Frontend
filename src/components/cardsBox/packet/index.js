import React from 'react';
import './style.css';
import opener from '../../../assets/opener.png';
import box from '../../../assets/box.png'
import arrow from '../../../assets/Arrow.png';
import Spreadcards from '../cardsSpread';
import './hide';

function Packet (){
    return (
        <>       
        <center>
        <div class="packet">
    
            <center>
                <div class="packet__text">Click to open your first packet!</div>
            </center>
            <div class="packet__arrow">
                <span class="packet__arrow__img"><img src={arrow} alt="pointer" /></span> 
            </div>
        
            <div class="packet__opener">
                <span class="packet__opener__img"><img src={opener} alt="opener" /></span> 
            </div>

        {/*<div class="peeping-cards">
        <img src={peepingcards} class="peeping-cards" alt="cards-inside" />
    </div>*/}
       
            {/*<div class="packet__cards-packet" onclick="cardsDisplay()">*/}
                <span class="packet__cards-packet__img"><img src={box} alt="box-of-cards" /></span> 
            {/*</div>*/}
        

       
        </div>

        <div class="spread-cards">
            <Spreadcards />
        </div>

        </center> 
        </>
    );
}

export default Packet;