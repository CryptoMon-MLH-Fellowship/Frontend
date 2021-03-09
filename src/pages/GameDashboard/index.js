import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './style.css'
import Avatar from '../../components/profile/index'
import Statistics from '../../components/statistics/index'
import Cards from '../../components/cards/index'
import SideNav from '../../components/SideNav/index'


const GameDashboard = (prop) => {
    return (
        <Container>
            <Row className="flex-nowrap">
                <Col className="column profile-column" xs="3">
                    <Avatar/>
                    <Statistics value={prop.value}/>
                </Col>
                <Col className="column" xs="7"><Cards/></Col>
                <Col className="column column--nobg" xs="2">
                  <SideNav/>
                </Col>
            </Row>
        </Container>
    )
}

export default GameDashboard