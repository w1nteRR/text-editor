import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Input } from '../../common/inputs/inputs.shared'
import { Container } from '../../common/layout/layout'
import { Button } from '../../common/buttons/buttons.shared'

import { EditView } from '../Edit.view'

import { updateTextValue } from '../../../redux/text/actions'

export const ControlEdit = ({ text }) => {

    const [name, setName] = useState('')

    const dispatch = useDispatch()

    return (
        <EditView title='Change text' current={text.text}>
            <Container 
                justify='space-between' 
                w='90%' 
                m='20px 0'
                h='100px' 
                direction='column'
            >
               <Container m='10px'>
                   <Input 
                        type='text' 
                        placeholder='New name'
                        change={event => setName(event.target.value)}
                        p='7px' 
                    />
                </Container> 
                {
                    name
                    &&
                    <Button 
                        title='Update' 
                        bgColor='#0078F2'
                        click={() => dispatch(updateTextValue(text.id, name))}
                    /> 
                }
            </Container>
        </EditView>
    )
}