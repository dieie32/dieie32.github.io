import {connect} from "react-redux"
import {enterNumberAC,
		enterDotAC,
		changeSignAC,
		removeLastSymbolAC,
		removeAllSymbolsAC,
		enterOperationAC,
		getValueAC, showPhraseAC} from "../../redux/calculatorReducer"

import Calculator from './Calculator'

let mapStateToProps = (state) => {
	return {
		currentValue: state.calculatorApp.currentValue,
		operation: state.calculatorApp.operation,
		result: state.calculatorApp.result
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		enterNumber: (value) => {
			dispatch(enterNumberAC(value))
		},
		enterDot: () => {
			dispatch(enterDotAC())
		},
		changeSign: () => {
			dispatch(changeSignAC())
		},
		removeLastSymbol: () => {
			dispatch(removeLastSymbolAC())
		},
		removeAllSymbols: () => {
			dispatch(removeAllSymbolsAC())
		},
		enterOperation: (value) => {
			dispatch(enterOperationAC(value))
		},
		getValue: () => {
			dispatch(getValueAC())
		},
		showPhrase: () => {
			dispatch(showPhraseAC())
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Calculator)