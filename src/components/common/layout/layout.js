import styled from 'styled-components'

export const Container = styled.div`
    width: ${props => props.w || '100%'};
    height: ${props => props.h || 'auto'};
    min-height: ${props => props.minH || 'auto'};
    max-height: ${props => props.maxH || 'auto'};
    
    display: flex;
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    flex-direction: ${props => props.direction || 'row'};
    flex-wrap: ${props => props.wrap ? 'wrap' : null};
    
    margin: ${props => props.m || '0'};
    padding: ${props => props.p || '0'};
    
    background-color: ${props => props.bgColor || ''};
    box-shadow: ${props => props.shadow ? '0px 0px 3px rgba(0, 0, 0, 0.5)' : null };
`