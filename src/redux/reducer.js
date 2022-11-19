import { v4 as uuidv4 } from 'uuid';

const initialState = {
    cards: [
        {
            id: uuidv4(),
            name: 'KZ4A',
            series: 12345,
            numberOfSections: 5,
            coordinates: {lat: 51.1605, lng: 71.4703} 
        },
        {
            id: uuidv4(),
            name: 'OGIZ',
            series: 52990,
            numberOfSections: 1,
            coordinates: { lat: 43, lng: 76 }
        },
        {
            id: uuidv4(),
            name: 'KZ8A',
            series: 76345,
            numberOfSections: 3,
            coordinates: { lat: 50, lng: 57 }
        }
    ],

    // tempCoord: [],

}

const locApp = (state = initialState, action) => {
    switch (action.type) {

        // case 'NEW_COORD':
        //     return action.payload !== null ? {
        //         ...state,
        //         tempCoord: [...state.tempCoord, action.payload]
        //     } : state;

        case 'ADD_CARD':
            // console.log(action.payload)
            return {
                
                ...state,
                cards: [...state.cards, {
                    id: uuidv4(),
                    name: action.payload.name,
                    series: action.payload.series,
                    numberOfSections: action.payload.sections,
                    coordinates: action.payload.location
                }]
            
            }

        case 'UPDATE_CARD':
            const newList = state.cards.map(el => {
                if (el.id === action.payload.cardId) {
                    return action.payload.updCard
                } else {
                    return el
                }
            })
            return {
                ...state,
                cards: newList
            }

        case 'DELETE_CARD':
            const newCards = state.cards.filter(el => el.id !== action.payload)
            return {
                ...state,
                cards: newCards
            }

        default:
            return state
    }
}

export default locApp;