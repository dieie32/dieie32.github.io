import React from 'react'
import Form from '../Form/Form'
import Information from '../Information/Information'

const Weather = (props) => {
	return (
		<div className="weather">
			<Form inputCity={props.inputCity}
				  findCity={props.findCity}
				  city={props.city}/>
			<Information findCity={props.findCity}
					     data={props.data}
					     date={props.date}/>
		</div>
	)
}

export default Weather