import { ADD_TEXT_TO_STORE, DELETE_TEXT, SET_ACTIVE_TEXT, UPDATE_TEXT_VALUE } from './constants'

export const addTextToStore = text => ({
    type: ADD_TEXT_TO_STORE,
    payload: text
})

export const deleteText = id => ({
    type: DELETE_TEXT,
    payload: id
})

export const setActiveText = id => ({
    type: SET_ACTIVE_TEXT,
    payload: id
})

export const updateTextValue = (id, text) => ({
    type: UPDATE_TEXT_VALUE,
    payload: {
        id,
        text
    }
})