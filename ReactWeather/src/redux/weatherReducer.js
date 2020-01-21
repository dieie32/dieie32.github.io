const INPUT_CITY = "INPUT_CITY"
const FIND_CITY = "FIND_CITY"

const initialState = {
	data: {
		name: '',
		main: {
			temp: '',
			humidity: ''
		},
		clouds: {
			all: ''
		},
		wind: {
			speed: ''
		},
		weather: [{
			description: '',
			main: '',
			icon: ''
		}]
	},
	date: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`,
	city: null
}




const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case INPUT_CITY:
			return {
				...state,
				city: action.city
			}
		case FIND_CITY:
			return {
				...state,
				data: action.response,
				date: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`
			}
		default:
			return state
	}
}

export const inputCityAC = (city) => ({type: INPUT_CITY, city})
export const findCityAC = (response) => ({type: FIND_CITY, response})


export default weatherReducer