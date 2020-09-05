import { OPEN_EDITOR, CLOSE_EDITOR, OPEN_MODAL, CLOSE_MODAL } from "./constants"

const initialState = {
    isEditorOpen: false,
    text: null,
    modal: ''
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {  
        case OPEN_EDITOR:
            return {
                ...state,
                isEditorOpen: true,
                text: action.payload
            }
        case CLOSE_EDITOR:
            return {
                ...state,
                isEditorOpen: false
            }
        case OPEN_MODAL:
            return {
                ...state,
                modal: action.payload
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modal: null
            }
        default:
            return state
    }
}