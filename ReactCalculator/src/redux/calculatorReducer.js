const ENTER_NUMBER        = "ENTER_NUMBER"
const ENTER_DOT           = "ENTER_DOT"
const CHANGE_SIGN         = "CHANGE_SIGN"
const REMOVE_LAST_SYMBOL  = "REMOVE_LAST_SYMBOL"
const REMOVE_ALL_SYMBOLS  = "REMOVE_ALL_SYMBOLS"
const ENTER_OPERATION     = "ENTER_OPERATION"
const GET_VALUE           = "GET_VALUE"
const SHOW_PHRASE         = "SHOW_PHRASE"

let initialState = {
	prevValue: '',
	currentValue: '',
	operation: '',
	result: '',
	phrases:["”You must be the change you wish to see in the world.” — Gandhi",
			 "”Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.” — Albert Einstein",
			 "”A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.” — George Bernhard Shaw",
			 "”He who fears he will suffer, already suffers because he fears.” — Michel De Montaigne",
			 "“We think sometimes that poverty is only being hungry, naked and homeless. The poverty of being unwanted, unloved and uncared for is the greatest poverty.” — Mother Theresa",
			 "“Love is a verb. Love — the feeling — is a fruit of love, the verb.” — Stephen Covey",
			 "“Life is really simple, but we insist on making it complicated.” — Confucius",
			 "“If you don’t like something, change it. If you can’t change it, change the way you think about it.” — Mary Engelbreit",
			 "“In seeking happiness for others, you will find it in yourself.” — Unknown",
			 "“God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.” — Reinhold Niebuhr",
			 "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.” — Bill Keane",
			 "“Life is never made unbearable by circumstances, but only by lack of meaning and purpose.” — Viktor Frankl",
			 "“If you want happiness for an hour — take a nap. If you want happiness for a day — go fishing. If you want happiness for a year — inherit a fortune. If you want happiness for a life time — help someone else.” — Chinese proverb",
			 "“When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.” — Helen Keller",
			 "“Most people do not listen with the intent to understand; they listen with the intent to reply.” — Stephen Covey",
			 "“Before you diagnose yourself with depression or low self-esteem, first make sure that you are not, in fact, just surrounded by assholes.” — Sigmund Freud”",
			 "“Challenges are what make life interesting and overcoming them is what makes life meaningful.” — Joshua J. Marine”",
			 "“A mind that is stretched by a new experience can never go back to its old dimensions.” — Oliver Wendell Holmes",
			 "“The only way that we can live is if we grow. The only way we can grow is if we change. The only way we can change is if we learn. The only way we can learn is if we are exposed. And the only way that we are exposed is if we throw ourselves into the open.” — C. Joybell",
			 "“Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.” — Henry van Dyke",
			 "“I would rather die a meaningful death than to live a meaningless life.” — Corazon Aquino”"]
}

const calculatorReducer = (state = initialState, action) => {
	switch(action.type) {
		case ENTER_NUMBER:
			if (state.result !== '') {
				return {
					...state,
					result: '',
					currentValue: action.value
				}
			}
			if (state.operation !== '' && state.prevValue === '') {
				return {
					...state,
					prevValue: {...state}.currentValue,
					currentValue: action.value
				}
			}
			if (state.currentValue[0] === '0' && state.currentValue[1] !== '.') {
				return {
					...state,
					currentValue: action.value
				}
			}
			return {
				...state,
				currentValue: {...state}.currentValue + action.value
			}
		case ENTER_DOT:
			if (state.currentValue.indexOf('.') + 1) return state
			if (state.currentValue.length === 0) return { ...state, result: '0.', currentValue: {...state}.currentValue +'0.' }
			return {
				...state,
				currentValue: {...state}.currentValue + '.'
			}
		case CHANGE_SIGN:
			return {
				...state,
				currentValue: {...state}.currentValue.charAt(0) === '-' ? {...state}.currentValue.substr(1) : '-' + {...state}.currentValue
			}
		case REMOVE_LAST_SYMBOL:
			if (state.prevValue === '' && state.operation !== '') return state
			return {
				...state,
				currentValue: {...state}.currentValue.slice(0, state.currentValue.length-1)
			}
		case REMOVE_ALL_SYMBOLS:
			return {
				...state,
				currentValue: '',
				prevValue: '',
				result: '',
				operation: ''
			}
		case ENTER_OPERATION:
			return {
				...state,
				operation: action.value
			}
		case GET_VALUE:
			if (state.prevValue !== '' && state.operation !== '' && state.currentValue !== '') {
				return {
					...state,
					result: {...state}.prevValue + {...state}.operation + {...state}.currentValue,
					prevValue: '',
					currentValue: '',
					operation: ''
				}
			}
			return state;
		case SHOW_PHRASE:
			let randomPhrase = parseInt(Math.random() * 20 + 0)
			console.log(randomPhrase)
			alert(`One of the World’s Most Powerful Quotes: \n ${state.phrases[randomPhrase]}`)
			return state
		default:
			return state
	}
}

export const enterNumberAC    = (value) => ({type: ENTER_NUMBER, value})
export const enterDotAC         = ()    => ({type: ENTER_DOT})
export const changeSignAC       = ()    => ({type: CHANGE_SIGN})
export const removeLastSymbolAC = ()    => ({type: REMOVE_LAST_SYMBOL})
export const removeAllSymbolsAC = ()    => ({type: REMOVE_ALL_SYMBOLS})
export const enterOperationAC = (value) => ({type: ENTER_OPERATION, value})
export const getValueAC         = ()    => ({type: GET_VALUE})
export const showPhraseAC       = ()    => ({type: SHOW_PHRASE})

export default calculatorReducer