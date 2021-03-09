import React, { useEffect, useContext } from 'react'
import { GameContext } from '../../context/GameContext'


const Index = () => {
  const value = useContext(GameContext)
  return (
    
    <div className="monCardContainer d-flex justify-content-center">
      <div className="monCards d-flex justify-content-center align-items-center flex-wrap mt-4">
            {value.cards.map(item=> <div className="monCard"><img className="m-4" src={item}></img></div>)}
          
      </div>
    </div>
  )
}

export default Index
