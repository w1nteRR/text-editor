import { combineReducers } from 'redux'

import { appReducer } from './app/reducer'
import { textReducer } from './text/reducer'

export const rootReducer = () => combineReducers({
        app: appReducer,
        text: textReducer
    })

