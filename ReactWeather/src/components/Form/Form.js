import React from 'react'
import * as axios from 'axios'

const Form = (props) => {
	const inputCity = (ev) => {
		let city = ev.target.value
		props.inputCity(city)
	}

	const findCity = (ev) => {
		ev.preventDefault()
		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=2ec7f7b5fab44885766bbe4fc05fde4f`)
			.then(response => {
				props.findCity(response.data)
			}
		)
		
	}

	return (
		<div className="weather__form">
			<form>
				<input onChange={inputCity} className="weather__input" type="text" placeholder="Write the city (Kyiv)" required/>
				<input onClick={findCity} className="weather__submit" type="submit" value="Find"/>
			</form>
		</div>
	)
}

export default Form