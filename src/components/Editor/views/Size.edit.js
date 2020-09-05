import React, { useState } from 'react'

import { EditView } from '../Edit.view'

import { Container } from '../../common/layout/layout'
import { TextC } from '../../common/typography/typography.shared'
import { Button } from '../../common/buttons/buttons.shared'

import { Input } from '../../common/inputs/inputs.shared'

import { useText } from '../../../hooks/useText'

export const SizeEdit = ({ current, text }) => {

    const [fontSize, setSize] = useState(current)
    
    const { update } = useText({
        ...text,
        fontSize
    })

    return (
        <EditView title='Change size' current={current}>
            <Container 
                justify='space-between' 
                w='90%' 
                m='20px 0'
                h='100px' 
                direction='column'
            >
                <Container justify='space-between'>
                    <TextC   
                        text='New' 
                        fontSize='9px' 
                        uppercase 
                        color='silver'
                        weight='500' 
                    />
                    <Input
                        placeholder={current} 
                        w='40px' 
                        p='7px' 
                        type='number' 
                        change={event => setSize(event.target.value + 'px')}
                    />
                </Container>
            </Container>
            <Container>
            {
                fontSize
                &&
                <Button 
                    title='Update'
                    p='10px' 
                    bgColor='#0078F2'
                    click={() => update()}
                /> 
            }
            </Container>
        </EditView>
    )
}

