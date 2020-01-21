import { combineReducers, createStore } from 'redux'
import weatherReducer from './weatherReducer'

const reducers = combineReducers({
	weatherApp: weatherReducer
})

const store = createStore(reducers)

export default store