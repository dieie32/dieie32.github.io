import { combineReducers, createStore } from 'redux'
import exchangeReducer from './exchangeReducer'

const reducers = combineReducers({
	exchangeComponent: exchangeReducer
})

const store = createStore(reducers)

export default store