import React from 'react'
import { useSelector } from 'react-redux'

import { Modal } from '../common/modal/modal.shared'
import { Container } from '../common/layout/layout'
import { useText } from '../../hooks/useText'

export const JsonModal = () => {
    
    const modal = useSelector(state => state.app.modal)
    const { getJSON } = useText()

    return (
        <>
        {
            modal === 'json'
            &&
            <Modal title='Texts in JSON'>
                <Container w='70%' m='0 auto'>
                    <pre 
                        style={{ color: 'silver' }}
                    >
                        {getJSON()}
                    </pre>
                </Container>
            </Modal>
        }
        </>
    )
}