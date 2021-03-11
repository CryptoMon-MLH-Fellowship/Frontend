import React,{useState,createContext} from 'react'
import Avatar from '../assets/avatars/avatar (2).png'
import Cards from '../assets/pokemon.png'
export const GameContext = createContext()

export const GameProvider = (props) => {
  const [username, setUsername] = useState("Dev")
  const [userAvatar, setUserAvatar] = useState(Avatar)
  const [statistics, setStatistics] = useState({level:"00",won:"00",lost:"00"})
  const [cards, setCards] = useState([Cards,Cards,Cards,Cards,Cards,Cards])
  const [readyBattle, setReadyBattle] = useState(true)
  const [readyCard, setReadyCard] = useState(false)
  const [selectedCard, setSelectedCard] = useState({ID:null,selected:false})

  const openBattle = () => {
    console.log(readyBattle);
    readyBattle?setReadyCard(true):setReadyCard(false)
    return readyBattle?setReadyBattle(false):setReadyBattle(true)
  } 

  const getSelectedCard = (cardId) =>{
    setSelectedCard({ID:cardId,selected:true})
    console.log(selectedCard);
  }
  

  return (
    <GameContext.Provider 
    value={{
      statistics:[statistics, setStatistics],
      username:username,
      userAvatar:userAvatar,
      cards,
      openBattle,
      readyBattle,
      readyCard,
      selectedCard:[selectedCard, setSelectedCard],
      getSelectedCard
    }
    }
    >
      {props.children}
    </GameContext.Provider>
  )
}

