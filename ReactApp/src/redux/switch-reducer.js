const INCREASE                 = 'INCREASE'
const DECREASE                 = 'DECREASE '
const GENERATE_RANDOM_NUMBER   = 'GENERATE_RANDOM_NUMBER'


let initialState = {
	count: 0,
	randomNumber: Math.round(Math.random() * 10 + 1)
}


const switchReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREASE:
			return {
				...state,
				count: +{...state}.count + 1
			}
		case DECREASE :
			return {
				...state,
				count: +{...state}.count - 1
			} 
		case GENERATE_RANDOM_NUMBER:
			return {
				...state,
				randomNumber: Math.round(Math.random() * (action.max - action.min) + action.min)
			}

		default:
			return state
	}
}


export const increaseValueCreator = () => ({type: INCREASE})
export const decreaseValueCreator = () => ({type: DECREASE})
export const generateRandomNumberCreator = (min, max) => ({type: GENERATE_RANDOM_NUMBER, min, max})

export default switchReducer