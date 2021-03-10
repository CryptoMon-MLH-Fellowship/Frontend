import React,{useState,useContext} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './style.css'
import Avatar from '../../components/profile/index'
import Statistics from '../../components/statistics/index'
import Cards from '../../components/cards/index'
import SideNav from '../../components/SideNav/index'
import {GameContext} from '../../context/GameContext'

import CardsBox from '../../components/cardsBox/packet/index' 

const GameDashboard = (prop) => {
    const value = useContext(GameContext)
    return (
        <Container>
            <Row className="flex-nowrap">
                <Col className="column profile-column" xs="3">
                    <Avatar/>
                    <Statistics value={prop.value}/>
                </Col>
                <Col className="column" xs="7">
                  {value.readyBattle?
                    <Cards/>:
                    <div>hello</div>
                  }
                </Col>
                <Col className="column column--nobg" xs="2">
                    <SideNav/>
                </Col>
            </Row>
            <Row>
                <CardsBox />
            </Row>
        </Container>
    )
}

export default GameDashboard
