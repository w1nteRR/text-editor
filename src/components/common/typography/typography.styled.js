import styled from 'styled-components'

export const TextStyled = styled.span`
    font-size: ${props => props.fontSize};
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
`

export const TextCStyled = styled.span`
    font-size: ${props => props.fontSize || '12px'};
    font-weight: ${props => props.weight || '400'};
    text-transform: ${props => props.uppercase ? 'uppercase' : null};
    color: ${props => props.color || "silver"};
    letter-spacing: ${props => props.spacing || '0'};
`