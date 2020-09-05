import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from '../common/layout/layout'
import { Button } from '../common/buttons/buttons.shared'

import { ColorEdit } from './views/Color.edit'
import { SizeEdit } from './views/Size.edit'
import { ControlEdit } from './views/Control.edit'

import { TextC } from '../common/typography/typography.shared'

import { closeEditor } from '../../redux/app/actions'
import { deleteText } from '../../redux/text/actions'

export const Editor = () => {

    const isEditorOpen = useSelector(state => state.app.isEditorOpen)
    const text = useSelector(state => state.app.text)

    const dispatch = useDispatch()

    return (
        <>
        {
            isEditorOpen
            &&
            <Container 
                h='100vh'
                w='20%'
                bgColor='#1c1c1c' 
                shadow 
                justify='flex-start'
                direction='column'
                style={{
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    overflowY: 'scroll',
                    overflowX: 'hidden'
                }}
            >
                <Container justify='space-around' p='10px 0'>
                    <TextC text='Text Editor' uppercase />
                    <Button 
                        title='x' 
                        bgColor='red' 
                        click={() => dispatch(closeEditor())} 
                    />
                </Container>
                <Button 
                    bgColor='brown' 
                    title='Delete'
                    click={() => dispatch(deleteText(text.id))} 
                />
                <ControlEdit 
                    text={text}
                />
                <SizeEdit 
                    current={text.fontSize}
                    text={text}
                />
                <ColorEdit 
                    currColor={text.color} 
                    text={text} 
                    colorType='color'
                />
                <ColorEdit 
                    currColor={text.bgColor} 
                    text={text} 
                    colorType='bgColor'
                />
            </Container>    
        }
        </>
    )
}
