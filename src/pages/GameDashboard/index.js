import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './style.css'

const GameDashboard = () => {
    return (
<Container>
  <Row className="flex-nowrap">
    <Col className="column" xs="3">1 of 2</Col>
    <Col className="column" xs="7">2 of 2</Col>
    <Col className="column" xs="2">1 of 2</Col>
  </Row>
</Container>
    )
}

export default GameDashboard
