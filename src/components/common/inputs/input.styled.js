import styled from 'styled-components'

export const InputStyled = styled.input`
    outline: none;
    border: none;

    border-radius: 5px;

    padding: ${props => props.p || '20px'};

    width: ${props => props.w || 'auto'};

    box-shadow: 0px 0 2px #1c1c1c;
`