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

const Output = (props) => {
	const classes = useStyles();

	const outputCurrencyTo = (ev) => {
		let currencyTo = ev.target.value
		// Change graph
		axios.get(`https://api.exchangeratesapi.io/history?start_at=${props.startAt}&end_at=${props.endAt}&base=${props.currencyFrom}&symbols=${currencyTo}`)
			 .then(response => {
			     props.setGraph(response.data.rates)
			 })
			 .then(props.outputCurrencyTo(currencyTo))
	}
	let rates = []
	for (let option in props.data.rates) {
		rates.push(option)
	}
	return (
		<div className="output">
			{
				<FormControl variant="filled" className={classes.formControl}>
			        <InputLabel htmlFor="filled-age-native-simple">Currency to</InputLabel>
			        <Select
			            native
			            value={props.currencyTo}
			            onChange={outputCurrencyTo}
			            margin="dense"
			            input={<FilledInput id="filled-age-native-simple" />}
			        >
			        <option key={props.currencyTo} value={props.currencyTo}>
			            {props.currencyTo}
			        </option>
		            {	
		            	
			        	rates.map(option => {
			        		if(option !== props.currencyTo) {
			        			return <option key={option} value={option}>
						            {option}
						        </option>
						    } else return null
						}
				        )
			        }
			        </Select>
			    </FormControl>
		    }
			<TextField
		        id="filled-with-placeholder"
		        label="Amount to"
		        placeholder=""
		        className={classes.textField}
		        margin="dense"
		        variant="filled"
		        value={props.amountTo}
		        InputProps={{
		            readOnly: true,
		        }}
		    />
		</div>
	)
}

// <input onChange={outputCurrencyTo} value={props.currencyTo} type="text" placeholder="Currency to"/>

export default Output