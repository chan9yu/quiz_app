import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';
import { store } from './store';

Chart.register(ArcElement, Tooltip, Legend);

const rootElement = document.getElementById('root');

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
} else {
	throw new Error('root element not found');
}
