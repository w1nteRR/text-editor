import React from 'react'

import { InputStyled } from './input.styled'

export const Input = ({ 
    change,
    placeholder,
    maxLength,
    value,
    min,
    max,
    type,
    w,
    p 
}) => 
    <InputStyled
        value={value} 
        onChange={change}
        min={min}
        max={max}
        placeholder={placeholder} 
        maxLength={maxLength}
        type={type}
        w={w}
        p={p}
    />
    
    