import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd'

import frFR from 'antd/lib/locale-provider/fr_FR';

import App from './containers/App/App'

import registerServiceWorker from './registerServiceWorker'

import store from './store'

import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<LocaleProvider locale={frFR}>
			<App />
		</LocaleProvider>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
