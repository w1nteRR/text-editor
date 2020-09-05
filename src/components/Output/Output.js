import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from '../common/layout/layout'
import { Text } from '../common/typography/typography.shared'

import { openEditor } from '../../redux/app/actions'

export const Output = () => {
    
    const texts = useSelector(state => state.text.texts)
    const activeText = useSelector(state => state.text.activeText) || ''
    const dispatch = useDispatch()


    if(!texts.length) return (
        <Container h='50vh'>
            <h4>Add some text</h4>
        </Container>
    )
    
    return (
        <Container minH='50vh' wrap='true'>
            {
                texts.map(text => 
                    <Container
                        onClick={() => dispatch(openEditor(text))} 
                        key={text.id} 
                        shadow={activeText.id === text.id} 
                        p='10px' 
                        w='auto' 
                        m='10px'

                        style={{
                            borderRadius: 5,
                            cursor: 'pointer'
                        }}
                    >
                        <Text 
                            text={text.text}
                            color={text.color}
                            bgColor={text.bgColor} 
                            fontSize={text.fontSize}
                        />
                    </Container>
                )
            }
        </Container>
    )
}