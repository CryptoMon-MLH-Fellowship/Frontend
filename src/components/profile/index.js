import React, { useEffect, useContext } from 'react'
import './style.css'
import { GameContext } from '../../context/GameContext'

const Index = () => {
  const value = useContext(GameContext)
    return (
        <div className="profileContainer d-flex flex-column align-items-center justify-content-center mt-4">
            <div className="profile">
                <img className="profile__image" src={value.userAvatar}></img>
            </div>
            <div className="profile__name mt-3 ">{value.username}</div>
        </div>
    )
}

export default Index
