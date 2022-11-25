import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import updateContext from '@laufire/resist';
import './index.css';
import App from './App';
import context from './core/context';

const Entry = () => {
	const [state, setState] = useState(context.seed);

	useEffect(context.init, []);
	updateContext(context, { state, setState });

	return App(context);
};
const root = createRoot(document.getElementById('root'));
root.render(<Entry/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
