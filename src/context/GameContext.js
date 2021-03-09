import React,{useState,createContext} from 'react'
import Avatar from '../assets/avatars/avatar (2).png'
import Cards from '../assets/spread-cards/card (1).png'
export const GameContext = createContext()

export const GameProvider = (props) => {
  const [username, setUsername] = useState("Dev")
  const [userAvatar, setUserAvatar] = useState(Avatar)
  const [statistics, setStatistics] = useState({level:"00",won:"00",lost:"00"})
  const [cards, setCards] = useState([Cards,Cards,Cards,Cards,Cards,Cards])

  return (
    <GameContext.Provider 
    value={{
      statistics:[statistics, setStatistics],
      username:username,
      userAvatar:userAvatar,
      cards
    }
    }
    >
      {props.children}
    </GameContext.Provider>
  )
}

