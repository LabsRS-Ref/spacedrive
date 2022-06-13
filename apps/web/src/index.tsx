import React from 'react';
import ReactDOM from 'react-dom/client';

import '@sd/ui/style';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	// 严格模式
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
