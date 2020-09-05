import React from 'react'

import { Container } from '../common/layout/layout'
import { TextC } from '../common/typography/typography.shared'

export const EditView = ({ title, current, children }) => 
    <>
    <Container justify='flex-start' w='90%'>
        <h6 
            style={{ color: 'silver' }}
        >
            {title}
        </h6>
    </Container>
    <Container justify='space-between' w='90%'>
        <TextC 
            text='Current' 
            fontSize='8px' 
            uppercase 
            color='silver'
            weight='800' 
        />
        <TextC 
            text={current} 
            color='#fff' 
            fontSize='9px'
            weight='500' 
            uppercase
        />
    </Container>
    {children}
    </>