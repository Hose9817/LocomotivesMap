import { connect } from "react-redux"
import { Card, Button } from "@mui/material"

import NewLocomModal from "./NewLocomModal";
import UpdateModal from './UpdateModal'

const LocomCard = (props) => {



    const addNewCard = (newName, newSeries, newSections, newLocation) => {
        props.addCard(newName, newSeries, newSections, newLocation);
    };


    const updateCard = (id, newCard) => {
        props.updateCard(id, newCard);
    }

    return (
        <div style={{
            'width': '300px',
        }}>
            <NewLocomModal addNewCard={addNewCard} />


            <br />

            {props.cards.map(el => {
                // console.log(el.id)
                return <>
                    <Card key={el.id} variant="outlined">{
                        <div
                            key={el.id}
                            style={{
                                'padding': '15px',
                                'background': '#0a1f35',
                                'color': 'white',
                                'lineHeight': '2px'
                            }}
                        >

                            <label>Name:</label> &nbsp;<b><h5 style={{ 'display': 'inline' }}>{el.name}</h5></b>
                            <hr />

                            <label>Series:</label> &nbsp; <b><span>{el.series}</span></b>
                            <hr />

                            <label>Number of sections:</label> &nbsp; <b><span>{el.numberOfSections}</span></b><br />
                            <hr />

                            <label>Coordinates:</label> &nbsp; <b><span>Address (not ready)</span></b><br />
                            <hr />

                            <div style={{ 'display': 'inline' }}>
                                <UpdateModal card={el} updateCard={updateCard} style={{ 'marginRight': '10px' }} />

                                {/* <button onClick={() => props.updateCard(el.id, updCard)} >Update</button> */}
                                <Button variant="contained" color="error" onClick={() => props.deleteCard(el.id)} >Delete</Button>
                            </div>

                        </div>

                    }</Card>
                    <br />
                </>

            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards
})

const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch({ type: 'DELETE_CARD', payload: cardId }),
    addCard: (name, series, sections, location) => dispatch({ type: 'ADD_CARD', payload: { name, series, sections, location } }),
    updateCard: (cardId, updCard) => dispatch({ type: 'UPDATE_CARD', payload: { cardId, updCard } })
})

export default connect(mapStateToProps, mapDispatchToProps)(LocomCard)