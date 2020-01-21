import React from "react"



let Switcher = (props) => {
	let randomNumber = props.randomNumber
	let count = props.count

	let decreaseValue = () => {
		props.decrease()
	}

	let increaseValue = () => {
		props.increase()
	}

	let generateRandomNumber = () => {
		props.generateRandomNumber(1, 10)
	}
	return (
		<div className="switcher">
			<div className="switcher__input">
				<input type="button"
				   value="-"
				   onClick={decreaseValue}
				   className="minus"/>

				<span className="count">{count}</span>

				<input type="button"
					   value="+"
					   onClick={increaseValue}
					   className="plus"/>
			</div>
			

			<div className="switcher__generate">
				<input type="button"
				   value="Generate number"
				   onClick={generateRandomNumber}/>
			</div>


			<div className="switcher__info">
				{
					randomNumber === count ?
					<span className="win">You won</span> :
					<span className="loose">Try one more time</span>
				}
			</div>
			<div className="switcher__number">
				Number: {props.randomNumber}
			</div>
			
		</div>
	)
}

export default Switcher