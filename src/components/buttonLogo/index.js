import React, {useState, useContext} from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import gameControllerRetroSolid from '@iconify/icons-teenyicons/game-controller-retro-solid';
import './style.css'
import {GameContext} from '../../context/GameContext'

const Index = (prop) => {
    const value = useContext(GameContext)
    
  return (
    <div className= {`button mb-5 ${prop.readyBattle?"button--active":null}`} onClick={prop.onClick}>
      <div className="button__logo">
      {prop.children}
      </div>
    </div>
  )
}

export default Index
