import {connect} from "react-redux"

import Switcher from "./Switcher"
import {increaseValueCreator,
		decreaseValueCreator,
		generateRandomNumberCreator} from "../../redux/switch-reducer"


let mapStateToProps = (state) => {
	return {
		count: state.switchPage.count,
		randomNumber: state.switchPage.randomNumber
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		increase: () => {
			dispatch(increaseValueCreator())
		},
		decrease: () => {
			dispatch(decreaseValueCreator())
		},
		generateRandomNumber: (min, max) => {
			dispatch(generateRandomNumberCreator(min, max))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Switcher)