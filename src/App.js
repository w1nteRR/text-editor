import React from 'react'
import { useSelector } from 'react-redux'

import { Container } from './components/common/layout/layout'

import { Control } from './components/Control/Control'
import { Output } from './components/Output/Output'
import { Editor } from './components/Editor/Editor'
import { JsonModal } from './components/Json/Json.modal'

export const App = () => {

	const state = useSelector(state => state)
	console.log(state)

	return (
		<>
		<Container
			w='80%'  
			m='5% auto'
			p='20px'
			direction='column'
			shadow
		>
			<Control />
			<Output />
		</Container>
		<Editor />
		<JsonModal />
		</>
	)
}

