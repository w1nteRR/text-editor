import React from 'react'

import { TextStyled, TextCStyled } from './typography.styled'

export const Text = ({
    color,
    bgColor,
    fontSize,
    text
}) =>
    <TextStyled 
        bgColor={bgColor} 
        fontSize={fontSize} 
        color={color}
    >
        {text}
    </TextStyled>


export const TextC = ({
    fontSize,
    weight,
    color,
    spacing,
    text,
    uppercase
}) =>
    <TextCStyled  
        fontSize={fontSize} 
        color={color}
        spacing={spacing}
        weight={weight}
        uppercase={uppercase}
    >
        {text}
    </TextCStyled>