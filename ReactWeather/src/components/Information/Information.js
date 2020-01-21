import React from 'react'
import * as axios from 'axios'

// #2d72d9

class Information extends React.Component {
	componentDidMount() {
		axios.get('https://api.openweathermap.org/data/2.5/weather?q=Lviv&units=metric&appid=2ec7f7b5fab44885766bbe4fc05fde4f')
			.then(response => {
				this.props.findCity(response.data)	
			}
		)
	}

	render() {
		let data = this.props.data
		return (
			<div className="weather__information__container">
				<div className="weather__information">
					<table>
						<tbody>
						  	<tr>
						  		<td>City</td>
						  		<td>{data.name}</td>
							</tr>
							<tr>
								<td>Time</td>
								<td>{this.props.date}</td>
							</tr>
							<tr>
								<td>Temperature</td>
								<td>+{data.main.temp}&#8451;</td>
							</tr>
							<tr>
								<td>Clouds</td>
								<td>{data.clouds.all}%</td>
							</tr>
							<tr>
								<td>Humidity</td>
								<td>{data.main.humidity}%</td>
							</tr>
							<tr>
								<td>Wind</td>
								<td>{data.wind.speed} m/s</td>
							</tr>
							<tr>
								<td>Description</td>
								<td>{data.weather[0].description}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="weather__img">
					{(data.weather[0].icon !== '') 
					?
					<img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].main} title={data.weather[0].main}/>
					:
					 ''}
				</div>
			</div>
		)
	}
}

export default Information