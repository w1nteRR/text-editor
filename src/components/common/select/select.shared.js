import React from 'react'

import { Container } from '../layout/layout'
import { TextC } from '../typography/typography.shared'
import { Color } from './select.styled'

import colors from '../../../utils/colors.json'

export const ColorSelect = ({
    isOpen,
    title,
    activeColor,
    onColorClick,
    onCloseClick,
    onActiveClick,
    showHeader,
    showControl = true
}) => {
    return (
        <Container direction='column' w='200px'>
            {
                showHeader
                ?
                <Container w='150px' justify='space-around' p='10px'>
                    <TextC
                        text={title}
                        uppercase
                        color='#171717'
                        weight='600'
                        fontSize='12px'
                    />
                    <Color 
                        bgColor={activeColor === 'transparent' ? '#efefef' : activeColor} 
                        onClick={onActiveClick} 
                    />
                </Container>
                : null
            }
            {
                isOpen
                &&
                <Container
                    w='150px'
                    h='120px'
                    bgColor='#1c1c1c'
                    direction='column'
                    style={{
                        borderRadius: 10,
                        position: 'absolute'
                    }}
                >
                    {
                        showControl
                        &&
                        <Container p='10px 0' justify='space-around'>
                            <TextC 
                                text={title} 
                                uppercase 
                                weight='600' 
                                fontSize='10px' 
                            />
                            <Container 
                                onClick={onCloseClick} 
                                bgColor='red' 
                                w='25px' 
                                style={{ borderRadius: 100 }}
                            >
                                <TextC text='x' fontSize='14px' />
                            </Container>
                        </Container>
                    }
                    <Container wrap='true'>
                        {
                            colors.map((color, index) =>
                                <Color
                                    key={index}
                                    bgColor={color.val}
                                    onClick={() => onColorClick(color.val)}
                                />
                            )
                        }
                    </Container>
                </Container>
            }
        </Container>
    )
}