import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import * as axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const Input = (props) => {
	const classes = useStyles()

	const inputAmountFrom = (ev) => {
		let amountFrom = ev.target.value
		props.inputAmountFrom(amountFrom)
	}
	const inputCurrencyFrom = (ev) => {
		let currencyFrom = ev.target.value
		axios.get(`https://api.exchangeratesapi.io/latest?base=${currencyFrom}`)
			 .then(response => {
			 	console.log(response.data)
			 	  
			 	 props.outputAmountTo(response.data)
			 }
		).then(props.inputCurrencyFrom(currencyFrom))
		
		// Change graph
		axios.get(`https://api.exchangeratesapi.io/history?start_at=${props.startAt}&end_at=${props.endAt}&base=${currencyFrom}&symbols=${props.currencyTo}`)
			 .then(response => {
			     props.setGraph(response.data.rates)
			 }
		)
	}

	let rates = []
	for (let option in props.data.rates) {
		rates.push(option)
	}
	return (
		<div className="input">
			<TextField
		        id="filled-with-placeholder"
		        label="Amount from"
		        placeholder="Put down an amount"
		        onChange={inputAmountFrom}
		        className={classes.textField}
		        margin="dense"
		        variant="filled"
		        value={props.amountFrom}
		    />
			{
				<FormControl variant="filled" className={classes.formControl}>
			        <InputLabel htmlFor="filled-age-native-simple">Currency from</InputLabel>
			        <Select
			            native
			            value={props.currencyFrom}
			            onChange={inputCurrencyFrom}
			            margin="dense"
			            input={<FilledInput name="age" id="filled-age-native-simple" />}
			        >
			        <option key={props.data.base} value={props.data.base}>
			            {props.data.base}
			        </option>
		            {	
		            	
			        	rates.map(option => {
			        		if(option !== props.data.base) {
			        			return <option key={option} value={option}>
						            {option}
						        </option>
						    } else return null
						})
			        }
			        </Select>
			    </FormControl>
		    }
		</div>
	)
}
// <input onChange={inputAmountFrom} value={props.amountFrom} type="text" placeholder="Amount from"/>
export default Input