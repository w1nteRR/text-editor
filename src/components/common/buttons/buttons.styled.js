import styled from 'styled-components'

export const ButtonStyled = styled.button`
    outline: none;
    border: none;

    padding: ${props => props.p || '10px'};
    
    background-color: ${props => props.bgColor || 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 0 5px #1c1c1c;
        transition: .5s ease-in-out;
    }
`