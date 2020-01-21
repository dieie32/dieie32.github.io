import store from "./redux/store"

import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"

import App from "./components/App/App"


render(
	<Provider store={store}>
		<App/>
	</Provider>, document.getElementById('root')
);