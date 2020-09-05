import { ADD_TEXT_TO_STORE, DELETE_TEXT, SET_ACTIVE_TEXT, UPDATE_TEXT_VALUE } from './constants'

const initialState = {
    texts: [],
    activeText: 0
}

export const textReducer = (state = initialState, action) => {
    switch(action.type) {   
        case ADD_TEXT_TO_STORE:
            return {
                ...state,
                texts: state.texts
                    .concat(action.payload)
                    .filter((item, index, array) => array.findIndex(text => (text.id === item.id)) === index)
            }
        case DELETE_TEXT:
            return {
                ...state,
                texts: state.texts.filter(text => text.id !== action.payload)
            }
        case SET_ACTIVE_TEXT:
            return {
                ...state,
                activeText: action.payload
            }
        case UPDATE_TEXT_VALUE:
            return {
                ...state,
                text: state.texts.forEach(text => {
                    if(text.id === action.payload.id) {
                        text.text = action.payload.text
                    }
                })
            }
        default:
            return state
    }
}