import styled from 'styled-components'

export const Color = styled.div`
    width: 15px;
    height: 15px;

    margin: 10px;

    background-color: ${props => props.bgColor};

    border-radius: 100%;

    cursor: pointer; 
`