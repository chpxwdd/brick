import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import './index.css'
import App from './components/App'

import registerServiceWorker from './registerServiceWorker'

render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
	</div>,
	document.getElementById('root')
)

registerServiceWorker()
