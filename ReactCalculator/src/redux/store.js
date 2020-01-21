import { combineReducers, createStore } from 'redux'

import calculatorReducer from './calculatorReducer'


let reducers = combineReducers({
	calculatorApp: calculatorReducer
})

let store = createStore(reducers)

export default store