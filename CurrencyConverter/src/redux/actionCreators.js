import * as actions from "./actions"

export const inputAmountFromAC = (amountFrom) => ({type: actions.INPUT_AMOUNT_FROM, amountFrom})
export const inputCurrencyFromAC = (currencyFrom) => ({type: actions.INPUT_CURRENCY_FROM, currencyFrom})
export const outputCurrencyToAC = (currencyTo) => ({type: actions.OUTPUT_CURRENCY_TO, currencyTo})
export const outputAmountToAC = (data) => ({type: actions.OUTPUT_AMOUNT_TO, data})

export const changeCurrenciesAC = () => ({type: actions.CHANGE_CURRENCIES})

export const setGraphAC = (data) => ({type: actions.SET_GRAPH, data})