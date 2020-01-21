import React from 'react'

import OutputDisplay from './OutputDisplay/OutputDisplay'
import AdditionalFunctions from './AdditionalFunctions/AdditionalFunctions'
import NumSigns from './NumSigns/NumSigns'
import MathSigns from './MathSigns/MathSigns'


const Calculator = (props) => {
	return (
		<div className="calculator__body">
			<OutputDisplay currentValue={props.currentValue}
						   operation={props.operation}
						   result={props.result}/>
			<div className="calculator__input">
				<div className="calculator__input--left">
					<AdditionalFunctions removeLastSymbol={props.removeLastSymbol}
										 removeAllSymbols={props.removeAllSymbols}
										 showPhrase={props.showPhrase}/>

					<NumSigns enterNumber={props.enterNumber}
							  enterDot={props.enterDot}
							  changeSign={props.changeSign}
							  currentValue={props.currentValue}/>
				</div>
				<MathSigns enterOperation={props.enterOperation}
						   getValue={props.getValue}/>
			</div>
		</div>
	)
}

export default Calculator