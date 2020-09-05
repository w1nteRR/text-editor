import React from 'react'

import { ButtonStyled } from './buttons.styled'
import { TextC } from '../typography/typography.shared'

export const Button = ({ 
    title, 
    click,
    p,
    bgColor
}) =>
    <ButtonStyled 
        onClick={click} 
        p={p} 
        bgColor={bgColor}
    >
        <TextC 
            uppercase 
            text={title} 
            weight='600' 
            fontSize='12px' 
            color='#171717' 
        /> 
    </ButtonStyled>