import React, { useState } from 'react'

import { EditView } from '../Edit.view'
import { ColorSelect } from '../../common/select/select.shared'

import { Container } from '../../common/layout/layout'

import { useText } from '../../../hooks/useText'
import { Button } from '../../common/buttons/buttons.shared'
import { Color } from '../../common/select/select.styled'
import { TextC } from '../../common/typography/typography.shared'

export const ColorEdit = ({ currColor, text, colorType }) => {

    const [color, setColor] = useState(currColor)
    
    const { update } = useText({
        ...text,
        [colorType]: color
    })
    
    return (
        <EditView title={`Change ${colorType}`} current={currColor}>
            <Container justify='space-between' w='90%'>
                <TextC text='Your choice' uppercase fontSize='10px' />
                <Color bgColor={color} />
            </Container>
            <Container 
                justify='space-between' 
                w='90%' 
                m='20px 0'
                p='80px'
                direction='column'
            >
               <Container wrap='true' m='10px'>
                    <ColorSelect 
                        title='Color'
                        showHeader={false}
                        showControl={false}
                        isOpen={true}
                        onColorClick={color => setColor(color)}
                    />
                </Container> 
            </Container>
            <Button 
                title='Update' 
                bgColor='#0078F2' 
                click={() => update()} 
            />
        </EditView>
    )
}

