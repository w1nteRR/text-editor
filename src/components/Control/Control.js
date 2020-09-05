import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Container } from '../common/layout/layout'
import { Button } from '../common/buttons/buttons.shared'
import { Input } from '../common/inputs/inputs.shared'

import { ColorSelect } from '../common/select/select.shared'

import { useText } from '../../hooks/useText'
import { openModal } from '../../redux/app/actions'

export const Control = () => {

    const [text, setText] = useState('')
    const [fontSize, setFontSize] = useState('12px')
    const [color, setColor] = useState({
        isColorPickerOpen: false,
        color: 'black'
    })
    const [bgColor, setBgColor] = useState({
        isBgColorPickerOpen: false,
        color: 'transparent'
    })

    const obj = {
        id: Date.now(),
        text,
        fontSize,
        color: color.color,
        bgColor: bgColor.color
    }

    const { add, findActive } = useText(obj)
    const dispatch = useDispatch()

    useEffect(() => findActive(fontSize, color.color, bgColor.color), [fontSize, color.color, bgColor.color])

    return (
        <Container
            m='0 auto'
            h='400px'
            direction='column'
            justify='space-around'
        >
            <Container m='10px' justify='flex-start'>
                <Button title='Get JSON' click={() => dispatch(openModal('json'))} />
            </Container>
            <Container w='80%' direction='column'>
                    <Input 
                        w='90%' 
                        value={text}
                        placeholder='Enter text' 
                        change={event => setText(event.target.value)} 
                    />
                    <Container 
                        justify='space-between' 
                        w='90%'
                        m='10px'
                    >
                        <Input
                            placeholder={fontSize}
                            change={event => setFontSize(event.target.value + 'px')}
                            p='10px'
                            w='30px'  
                        />
                        <ColorSelect 
                            title='Color'
                            showHeader={true} 
                            isOpen={color.isColorPickerOpen}
                            activeColor={color.color}
                            onActiveClick={() => setColor({
                                ...color, 
                                isColorPickerOpen: true
                            })}
                            onCloseClick={() => setColor({
                                ...color, 
                                isColorPickerOpen: false 
                            })}
                            onColorClick={color => setColor({
                                isColorPickerOpen: false,
                                color
                            })}
                        />
                        <ColorSelect 
                            title='BgColor' 
                            showHeader={true}
                            isOpen={bgColor.isBgColorPickerOpen}
                            activeColor={bgColor.color}
                            onActiveClick={() => setBgColor({
                                ...bgColor, 
                                isBgColorPickerOpen: true 
                            })}
                            onCloseClick={() => setBgColor({ 
                                ...bgColor, 
                                isBgColorPickerOpen: false 
                            })}
                            onColorClick={color => setBgColor({
                                isBgColorPickerOpen: false,
                                color
                            })}
                        />
                        <Button 
                            title='Add text' 
                            bgColor='#0078F2'
                            click={() => {
                                if(!text.length) return alert('Input is empty')
                                
                                add()
                                setText('')
                            }} 
                        />
                    </Container>
            </Container>
        </Container>
    )
}