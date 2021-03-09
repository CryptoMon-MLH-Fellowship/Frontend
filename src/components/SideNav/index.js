import React from 'react'
import BtnLogo from '../buttonLogo/index'
import {Icon, InlineIcon} from '@iconify/react';
import gameControllerRetroSolid from '@iconify/icons-teenyicons/game-controller-retro-solid';
import swordFill from '@iconify/icons-ri/sword-fill';
import './style.css'

const Index = () => {
    return (
        <div className="sidenav d-flex flex-column justify-content-between">
            <div className="sidenav__buttons">
                <BtnLogo>
                    <Icon
                        icon={gameControllerRetroSolid}
                        style={{
                        color: '#ffffff',
                        fontSize: '80px'
                    }}/>
                </BtnLogo>

                <BtnLogo>
                    <Icon
                        icon={swordFill}
                        style={{
                        color: '#ffffff',
                        fontSize: '80px'
                    }}/>
                </BtnLogo>
            </div>

            <div className="sidenav__counter d-flex flex-column align-items-center justify-content-center">
                    <span className="counter__tag">Cards</span>
                    <span className="counter__data">06</span>
            </div>
        </div>
    )
}

export default Index
