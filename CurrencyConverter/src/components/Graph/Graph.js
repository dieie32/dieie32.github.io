import React from 'react'
import {Line} from 'react-chartjs-2';

const Graph = (props) => {
	return (
		<div className="graph">
	        <Line width={100} height={20} data={props.graph.data} options={{
	        	legend: {
		            display: false
		        },
	        }}/>
	    </div>
	)
}
export default Graph






// import * as axios from 'axios'

// const data = {
// 	labels: [0],
// 	datasets: [
// 		{
// 			fill: false,
// 			lineTension: 0.1,
// 			backgroundColor: 'rgba(75,192,192,0.4)',
// 			borderColor: 'rgba(75,192,192,1)',
// 			borderCapStyle: 'butt',
// 			borderDash: [],
// 			borderDashOffset: 0.0,
// 			borderJoinStyle: 'miter',
// 			pointBorderColor: 'rgba(75,192,192,1)',
// 			pointBackgroundColor: '#fff',
// 			pointBorderWidth: 1,
// 			pointHoverRadius: 5,
// 			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
// 			pointHoverBorderColor: 'rgba(220,220,220,1)',
// 			pointHoverBorderWidth: 2,
// 			pointRadius: 1,
// 			pointHitRadius: 10,
// 			data: [0]
// 		}
// 	]
// }

// let date = new Date()
// let endAt = `${date.getYear()+1900}-${date.getMonth()+1}-${date.getDate()}`
// date.setMonth(date.getMonth() - 10)
// let startAt = `${date.getYear()+1900}-${date.getMonth()+1}-${date.getDate()}`


// axios.get(`https://api.exchangeratesapi.io/history?start_at=${startAt}&end_at=${endAt}&symbols=USD`)
// 	 .then(response => {
// 	 	sortData(response.data.rates)
// 	 }
// )

// const sortData = (response) => {
// 	let data = []
// 	for (let date in response) {
// 		let obj = {date, rate: response[date]}
// 		data.push(obj)
// 	}
// 	data.sort((a, b) => (new Date(a.date) - new Date(b.date)) )
// 	setData(data)
// }

// const setData = (response) => {
// 	data.labels = []
// 	data.datasets[0].data = []
// 	let monthSwitch = new Date(response[0].date).getMonth()
// 	let countSwitch = 0
// 	let countMonthData = 0
// 	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	
// 	// debugger
// 	for (let i=0; i<response.length; i++) {
// 		if(countMonthData < 5) {
// 			data.datasets[0].data.push(response[i].rate['USD'])
// 			let month = new Date(response[i].date).getMonth()

// 			if(month === monthSwitch && countSwitch === 0) {
// 				data.labels.push(months[month])
// 				countSwitch ++
// 				monthSwitch = month
// 			} else {
// 				data.labels.push('')
// 				if(month !== monthSwitch) {
// 					monthSwitch = month
// 					countSwitch = 0
// 				}
// 			}
// 			countMonthData++
// 		} else {
// 			let month = new Date(response[i].date).getMonth()
// 			if(month !== monthSwitch) countMonthData = 0
// 		}
// 	}
// 	return data
// }


// const getData = () => {
// 	axios.get(`https://api.exchangeratesapi.io/history?start_at=2019-01-01&end_at=2019-05-01&symbols=USD`)
// 		 .then(response => {
// 		 	sortData(response.data.rates)
// 		 }
// 	)
// 	return data
// }
// console.log(data)