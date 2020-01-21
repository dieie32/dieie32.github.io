import * as actions from "./actions"
// Date for request
// debugger
let dateEnd = new Date()
let dateStart = new Date()
dateStart.setMonth(dateStart.getMonth() - 10)
let endAt = `${dateEnd.getYear()+1900}-${dateEnd.getMonth()+1}-${dateEnd.getDate()}`
let startAt = `${dateStart.getYear()+1900}-${dateStart.getMonth()+1}-${dateStart.getDate()}`


const initialState = {
	amountFrom: 100,
	currencyFrom: 'EUR',
	currencyTo: 'USD',
	amountTo: '',
	data: {
		base: 'EUR',
		rates: null
	},
	endAt: endAt,
	startAt: startAt,
	graph: {
		data: {
			labels: [0],
			datasets: [
				{
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(75,192,192,0.4)',
					borderColor: 'rgba(75,192,192,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(75,192,192,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [0]
				}
			]
		}
	}
}

const exchangeReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.INPUT_AMOUNT_FROM:
			return {
				...state,
				amountFrom: action.amountFrom,
				amountTo: Math.round(action.amountFrom * {...state}.data.rates[state.currencyTo] * 100) / 100
			}
		case actions.INPUT_CURRENCY_FROM:
			return {
				...state,
				currencyFrom: action.currencyFrom,
				amountTo: Math.round({...state}.amountFrom * {...state}.data.rates[state.currencyTo] * 100) / 100
			}
		case actions.OUTPUT_CURRENCY_TO:
			return {
				...state,
				currencyTo: action.currencyTo,
				amountTo: Math.round({...state}.amountFrom * {...state}.data.rates[action.currencyTo] * 100) / 100
			}
		case actions.CHANGE_CURRENCIES:
			return {
				...state,
				currencyFrom: {...state}.currencyTo,
				currencyTo: {...state}.currencyFrom,
				data: {
					base: {...state}.currencyFrom
				}
			}
		case actions.OUTPUT_AMOUNT_TO:
			if(action.data.rates[state.currencyTo]) return {
				...state,
				data: {base: action.data.base, rates: action.data.rates},
				amountTo: Math.round({...state}.amountFrom * action.data.rates[state.currencyTo] * 100) / 100
			}
			return state
		case actions.SET_GRAPH:
			// SORT 
			let data = []
			for (let date in action.data) {
				let obj = {date, rate: action.data[date]}
				data.push(obj)
			}
			data.sort((a, b) => (new Date(a.date) - new Date(b.date)) )
			// SET
			let graph = {...state}.graph
			graph.data.labels = []
			graph.data.datasets[0].data = []
			let monthSwitch = new Date(data[0].date).getMonth()
			let countSwitch = 0
			let countMonthData = 0
			let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			
			for (let i=0; i<data.length; i++) {
				if(countMonthData < 5) {
					graph.data.datasets[0].data.push(data[i].rate[{...state}.currencyTo])
					let month = new Date(data[i].date).getMonth()

					if(month === monthSwitch && countSwitch === 0) {
						graph.data.labels.push(months[month])
						countSwitch ++
						monthSwitch = month
					} else {
						graph.data.labels.push('')
						if(month !== monthSwitch) {
							monthSwitch = month
							countSwitch = 0
						}
					}
					countMonthData++
				} else {
					let month = new Date(data[i].date).getMonth()
					if(month !== monthSwitch) countMonthData = 0
				}
			}
			return {
				...state,
				graph: {
					data: graph.data
				}
			}
		default:
			return state
	}
}


export default exchangeReducer