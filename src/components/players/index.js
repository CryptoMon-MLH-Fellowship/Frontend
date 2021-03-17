import React, {useState, useContext} from 'react'
import {Modal, Button} from 'react-bootstrap';
import {GameContext} from '../../context/GameContext'
import './style.css'

const Index = () => {
    const value = useContext(GameContext)
    const selectedCard = value.selectedCard[0].selected
    const [modalShow,
        setModalShow] = useState(false);

    const sendCard = (e) => {

        if (value.selectedCard[1].ID != null) {
            document
                .getElementById(value.selectedCard[1].ID)
                .classList
                .remove("card--selected")
        }
        value.selectedCard[1].ID = e.currentTarget.id;
        value.getSelectedCard(value.selectedCard[1].ID)
        document
            .getElementById(value.selectedCard[1].ID)
            .classList
            .add("card--selected")

        setModalShow(true)
    }
    return (

        <div className="monCardContainer d-flex justify-content-center">
            <div
                className="monCards d-flex justify-content-center align-items-center flex-wrap mt-4">
                {value
                    .cards
                    .map((item, index) => <div
                        id={index}
                        className={"playercard monCard d-flex flex-column justify-content-center align-items-center"}
                        onClick={sendCard}>
                        <img className="playercard__img" src={value.userAvatar}></img>
                        <span className="playercard__name">{value.username}</span>
                    </div>)}
            </div>

            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Waiting for oponent {value.selectedCard[1].ID}...
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        TIP : Guna's algo will hopefully make you win :)
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Index
