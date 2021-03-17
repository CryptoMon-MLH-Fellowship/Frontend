import React from 'react';
import './style.css';
import opener from '../../../assets/opener.png';
import box from '../../../assets/box.png'
import Cardback from '../../../assets/cardback.png'
import './hide';

function Packet(props) {

    const openpack = () => {
        document
            .getElementById("pack")
            .classList
            .add("packopened")

        document
            .getElementById("pack2")
            .style
            .transform = "rotate(12deg)"

        document
            .getElementById("pack3")
            .style
            .transform = "rotate(-12deg)"

            setTimeout(function() {
                props.setCardBoxopened(true)
            }, 1100);
    }

    return (
        <div className="packet__container">
            <center>
                <div class="packet" onClick={openpack}>
                    <center>
                        <div class="packet__text">Click to open your first packet!</div>
                    </center>

                    <div class="packet__opener">
                        <span class="packet__opener__img"><img src={opener} alt="opener"/></span>
                    </div>

                    {/*<div class="packet__cards-packet" onclick="cardsDisplay()">*/}
                    <span class="packet__cards-packet__img"><img
                        className="packet__cards-packet__imgtag"
                        id="pack1"
                        src={Cardback}
                        alt="box-of-cards"/></span>
                    <span class="packet__cards-packet__img"><img
                        id="pack2"
                        className="packet__cards-packet__imgtag"
                        src={Cardback}
                        alt="box-of-cards"/></span>
                    <span class="packet__cards-packet__img"><img
                        id="pack3"
                        className="packet__cards-packet__imgtag"
                        src={Cardback}
                        alt="box-of-cards"/></span>
                    <span id="pack" class="packet__cards-cardback__img"><img src={box} class="packet__cards-cardback__img" alt="box-of-cards"/></span>
                    {/*</div>*/}

                </div>
            </center>
        </div>
    );
}

export default Packet;