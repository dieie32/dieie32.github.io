import { connect } from 'react-redux'
import Exchange from "./Exchange"
import * as AC from "../../redux/actionCreators"

const mapStateToProps = (state) => {
	let exchange = state.exchangeComponent
	return {
		amountFrom: exchange.amountFrom,
		currencyFrom: exchange.currencyFrom,
		currencyTo: exchange.currencyTo,
		amountTo: exchange.amountTo,
		data: exchange.data,
		endAt: exchange.endAt,
		startAt: exchange.startAt,
		graph: exchange.graph,
		setGraph: exchange.setGraph
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		inputAmountFrom: (amountFrom) => {
			dispatch(AC.inputAmountFromAC(amountFrom))
		},
		inputCurrencyFrom: (currencyFrom) => {
			dispatch(AC.inputCurrencyFromAC(currencyFrom))
		},
		outputCurrencyTo: (currencyTo) => {
			dispatch(AC.outputCurrencyToAC(currencyTo))
		},
		outputAmountTo: (data) => {
			dispatch(AC.outputAmountToAC(data))
		},
		changeCurrencies: () => {
			dispatch(AC.changeCurrenciesAC())
		},
		setGraph: (data) => {
			dispatch(AC.setGraphAC(data))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)