import { connect } from 'react-redux'
import Weather from "./Weather"
import {findCityAC,
		inputCityAC} from "../../redux/weatherReducer"

const mapStateToProps = (state) => {
	return {
		city: state.weatherApp.city,
		data: state.weatherApp.data,
		date: state.weatherApp.date
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		inputCity: (city) => {
			dispatch(inputCityAC(city))
		},
		findCity: (response) => {
			dispatch(findCityAC(response))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)