import { useDispatch, useSelector } from 'react-redux'

import { addTextToStore, deleteText, setActiveText } from '../redux/text/actions'

export const useText = text => {

    const dispatch = useDispatch()
    const texts = useSelector(state => state.text.texts)

    const copy = [...texts]

    const _filter = item => item.fontSize === text.fontSize && item.color === text.color && item.bgColor === text.bgColor

    const add = () => {
        const copy = [...texts]
        
        if(!texts.length) return dispatch(addTextToStore(text))

        const equalText = copy.filter(_filter)

        if(equalText.length) {
            let obj = Object.assign(equalText[0], {
                text: equalText[0].text.concat(text.text)
            })
            copy.concat(obj)
        } else {
            copy.push(text)
        }

        dispatch(addTextToStore(copy))
    }

    const update = () => {
        const equalText = copy.filter(_filter)

        if(equalText.length) {

            let obj = Object.assign(equalText[0], {
                id: Date.now(),
                text: equalText[0].text.concat(equalText[0].text === text.text ? '' : text.text)
            })

            copy.concat(obj)

            dispatch(addTextToStore(copy))
            dispatch(deleteText(text.id))

        } else {
            copy.map(item => {
                if(item.id === text.id) {
                    Object.assign(item, text)
                } 
            })

            dispatch(addTextToStore(copy))
        }        
    }

    const getJSON = () => JSON.stringify(texts, null, 2)

    const findActive = (fontSize, color, bgColor) => {
        const activeText = copy.filter(text => 
                text.fontSize === fontSize 
                && 
                text.color === color 
                && 
                text.bgColor === bgColor
            )
        dispatch(setActiveText(activeText[0]))
    }

    return {
        add,
        update,
        findActive,
        getJSON
    }
}