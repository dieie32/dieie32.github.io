import {combineReducers, createStore} from "redux"
import switchReducer from "./switch-reducer"

let reducers = combineReducers({
	switchPage: switchReducer
})

let store = createStore(reducers)

export default store