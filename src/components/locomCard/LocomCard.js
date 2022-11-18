import { connect } from "react-redux"

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
        <div>
            <NewLocomModal addNewCard={addNewCard} />


            <br />

            {props.cards.map(el => {
                // console.log(el.id)
                return <h6
                    key={el.id}
                    style={{
                        'border': 'solid 2px black',
                        'padding': '5px',
                        'margin': '10px'
                    }} >

                    <b><p>{el.name}</p></b>
                    <label>Series:</label> &nbsp; <b><span>{el.series}</span></b><br />
                    <label>Number of sections:</label> &nbsp; <b><span>{el.numberOfSections}</span></b><br />
                    {/* <label>Coordinates:</label> &nbsp; <b><span>{el.coordinates}</span></b><br /> */}
                    <UpdateModal card={el} updateCard={updateCard} />

                    {/* <button onClick={() => props.updateCard(el.id, updCard)} >Update</button> */}
                    <button onClick={() => props.deleteCard(el.id)}>Delete</button>

                </h6>;
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