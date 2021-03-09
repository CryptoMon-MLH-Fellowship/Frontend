import React,{useState,createContext} from 'react'

export const GameContext = createContext()

export const GameProvider = () => {
  return (
    <GameContext.Provider>
      {props.children}
    </GameContext.Provider>
  )
}

