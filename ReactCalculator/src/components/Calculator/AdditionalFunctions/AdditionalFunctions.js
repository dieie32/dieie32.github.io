import React from 'react'

const AdditionalFunctions = (props) => {
	let addBtnClass = "additional-sign"
	let addBtnsClass = "additional-signs"
	
	let removeLastSymbol = () => {
		props.removeLastSymbol()
	}

	let removeAllSymbols = () => {
		props.removeAllSymbols()
	}

	let showPhrase = () => {
		props.showPhrase()
	}

	return (
		<div className={addBtnsClass}>
			<button onClick={removeLastSymbol} className={addBtnClass}>&#8592;</button> 
			<button onClick={removeAllSymbols} className={addBtnClass}>AC</button>
			<button onClick={showPhrase} className={addBtnClass}>&#128521;</button>
		</div>
	)
	// 1st - Arrow(remove last symb)
	// 2nd - AC(clear input(result))
	// 3rd - Smile(say quotes)
}

export default AdditionalFunctions