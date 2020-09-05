import { OPEN_EDITOR, CLOSE_EDITOR, OPEN_MODAL, CLOSE_MODAL } from "./constants"

export const openEditor = text => ({
    type: OPEN_EDITOR,
    payload: text
})

export const closeEditor = () => ({
    type: CLOSE_EDITOR
})

export const openModal = name => ({
    type: OPEN_MODAL,
    payload: name
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})
