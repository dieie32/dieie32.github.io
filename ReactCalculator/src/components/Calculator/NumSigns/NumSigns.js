import React from 'react'

const NumSigns = (props) => {
	let numBtnClass = "num-sign"
	let numBtnsClass = "num-signs"

	let enterNumber = (ev) => {
		if (props.currentValue === '0' && ev.target.value === '0' && props.currentValue.length === 1) return
		if (props.currentValue.length < 9) {
			let value = ev.target.value
			props.enterNumber(value)
		}
	}

	let enterDot = () => {
		if (props.currentValue.length < 9) {
			props.enterDot()
		}
	}

	let changeSign = () => {
		if (props.currentValue.length < 9) {
			props.changeSign()
		}
	}

	return (
		<div className={numBtnsClass}>
			<button onClick={ changeSign  } className={numBtnClass}>+ / -</button>
			<button onClick={ enterNumber } value="0" className={numBtnClass}>0</button>
			<button onClick={  enterDot   } className={numBtnClass}>.</button>
			<button onClick={ enterNumber } value="1" className={numBtnClass}>1</button>
			<button onClick={ enterNumber } value="2" className={numBtnClass}>2</button>
			<button onClick={ enterNumber } value="3" className={numBtnClass}>3</button>
			<button onClick={ enterNumber } value="4" className={numBtnClass}>4</button>
			<button onClick={ enterNumber } value="5" className={numBtnClass}>5</button>
			<button onClick={ enterNumber } value="6" className={numBtnClass}>6</button>
			<button onClick={ enterNumber } value="7" className={numBtnClass}>7</button>
			<button onClick={ enterNumber } value="8" className={numBtnClass}>8</button>
			<button onClick={ enterNumber } value="9" className={numBtnClass}>9</button>
		</div>
	)
}

export default NumSigns