import React from 'react'
import Input from '../Input/Input.js'
import Output from '../Output/Output'
import Switch from '../Switch/Switch'
import Graph from '../Graph/Graph'
import * as axios from 'axios'

class Exchange extends React.Component {
	componentDidMount() {
		axios.get(`https://api.exchangeratesapi.io/latest?base=${this.props.currencyFrom}`)
			 .then(response => {
			 	 this.props.outputAmountTo(response.data)
			 }
		)
		// Change graph
		axios.get(`https://api.exchangeratesapi.io/history?start_at=${this.props.startAt}&end_at=${this.props.endAt}&base=${this.props.currencyFrom}&symbols=${this.props.currencyTo}`)
			 .then(response => {
			     this.props.setGraph(response.data.rates)
			 }
		)
	}
	
	
	render() {
		let props = this.props
		return (
			<div>
				<div className='exchange'>
					<Input inputAmountFrom={props.inputAmountFrom}
						   amountFrom={props.amountFrom}
						   inputCurrencyFrom={props.inputCurrencyFrom}
						   currencyFrom={props.currencyFrom}
						   outputAmountTo={props.outputAmountTo}
						   data={props.data}
						   currencyTo={props.currencyTo}
						   endAt={props.endAt}
						   startAt={props.startAt}
						   setGraph={props.setGraph}/>

					<Switch changeCurrencies={props.changeCurrencies}
					        currencyTo={props.currencyTo}
					        currencyFrom={props.currencyFrom}
					        outputAmountTo={props.outputAmountTo}
					        endAt={props.endAt}
						    startAt={props.startAt}
						    setGraph={props.setGraph}/>

					<Output outputCurrencyTo={props.outputCurrencyTo}
							outputAmountTo={props.outputAmountTo}
						    currencyTo={props.currencyTo}
						    currencyFrom={props.currencyFrom}
						    amountTo={props.amountTo}
						    data={props.data}
						    endAt={props.endAt}
						    startAt={props.startAt}
						    setGraph={props.setGraph}/>
				</div>
				<Graph graph={props.graph}/>
			</div>
		)
	}
}

export default Exchange