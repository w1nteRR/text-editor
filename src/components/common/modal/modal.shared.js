import React from 'react'
import { useDispatch } from 'react-redux'

import { ModalStyled } from './modal.styled'

import { Container } from '../layout/layout'
import { TextC } from '../typography/typography.shared'
import { Button } from '../buttons/buttons.shared'

import { closeModal } from '../../../redux/app/actions'

export const Modal = ({ 
    children, 
    title 
}) => {

    const dispatch = useDispatch()

    return (
        <ModalStyled>
            <Container justify='space-around' p='20px'>
                <TextC 
                    text={title} 
                    fontSize='20px' 
                />
                <Button 
                    title='x' 
                    p='20px' 
                    bgColor='red'
                    click={() => dispatch(closeModal())} 
                />
            </Container>
            {children}
        </ModalStyled>
    )
}