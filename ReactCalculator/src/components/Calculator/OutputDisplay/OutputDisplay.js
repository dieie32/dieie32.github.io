import React from 'react'
import * as math from 'mathjs'

const OutputDisplay = (props) => {
	return (
		<div className="output-display">
			<div className="output-display__result">
				{ (props.result !== '') ? math.eval(props.result) : props.currentValue }
			</div>
			<div className="output-display__temp">
				{ props.operation }
			</div>
		</div>
	)
}

export default OutputDisplay