import React from 'react'

const MathSigns = (props) => {
	let mathBtnClass = "mathematical-sign"
	let mathBtnsClass = "mathematical-signs"

	let enterOperation = (ev) => {
		let value = ev.target.value
		props.enterOperation(value)
	}

	let getValue = () => {
		props.getValue()
	}

	return (
		<div className={mathBtnsClass}>
			<button onClick={getValue} className={mathBtnClass}>=</button>
			<button onClick={enterOperation} value="+" className={mathBtnClass}>+</button>
			<button onClick={enterOperation} value="-" className={mathBtnClass}>-</button>
			<button onClick={enterOperation} value="*" className={mathBtnClass}>&#215;</button>
			<button onClick={enterOperation} value="/" className={mathBtnClass}>&divide;</button>
		</div>
	)
}

export default MathSigns