/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import Mousetrap from 'mousetrap';
import './App.scss';
import { map } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';

const handlers = {
	create: (context) => {
		const { actions } = context;

		actions.addChild();

		return false;
	},
	remove: (context) => {
		const { actions, data: { id }} = context;

		actions.toggleGreen(id);

		return false;
	},
	toggle: (context) => {
		const { actions, data: { id }} = context;

		actions.updateStyle(id);

		return false;
	},
};

const Box = (context) => {
	const { data: [currentBox, ...remainingBoxes] } = context;

	const boxRef = useRef(null);
	const { shortcuts, style } = currentBox;

	useEffect(() => {
		map(shortcuts, (handler, shortcut) =>
			new Mousetrap(peek(boxRef).current).bind(shortcut, () => {
				peek(shortcut);
				handlers[handler]({ ...context, data: currentBox });
				return false;
			}));

		remainingBoxes.length === 0 && boxRef.current.focus();
	}, [boxRef.current]);

	return <div ref={ boxRef } tabIndex="-1" style={ style } className="box">
		<input type="number"/>
		{
			remainingBoxes.length
				? <Box key={ remainingBoxes.length }{ ...{ ...context, data: remainingBoxes } }/>
				: null
		}
	</div>;
};

const App = (context) => Box({ ...context, data: context.state.boxes });

export default App;
