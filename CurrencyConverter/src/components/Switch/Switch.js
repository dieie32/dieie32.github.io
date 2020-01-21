import React from 'react'
import * as axios from 'axios'

const Switch = (props) => {
	const changeCurrencies = () => {
		axios.get(`https://api.exchangeratesapi.io/latest?base=${props.currencyTo}`)
			 .then(response => {
			 	 props.outputAmountTo(response.data)
			 }
		).then(props.changeCurrencies())

		// Change graph
		axios.get(`https://api.exchangeratesapi.io/history?start_at=${props.startAt}&end_at=${props.endAt}&base=${props.currencyTo}&symbols=${props.currencyFrom}`)
			 .then(response => {
		     	 props.setGraph(response.data.rates)
		})
	}
	return (
		<button onClick={changeCurrencies} type="button" value="Change currencies"><i className="fas fa-arrows-alt-h"></i></button>
	)
}
export default Switch