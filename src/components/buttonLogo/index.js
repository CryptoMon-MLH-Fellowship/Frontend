import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import gameControllerRetroSolid from '@iconify/icons-teenyicons/game-controller-retro-solid';
import './style.css'

const Index = (prop) => {
  return (
    <div className="button mb-5">
      <div className="button__logo">
      {prop.children}
      </div>
    </div>
  )
}

export default Index
