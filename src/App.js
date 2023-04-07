import React, { useEffect, useRef } from 'react';
import Mousetrap from 'mousetrap';
import './App.scss';
import { map } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';

const Box = (context) => {
	const { data: [currentBox, ...remainingBoxes], actions } = context;
	const { length } = remainingBoxes;
	const { shortcuts, style } = currentBox;
	const boxRef = useRef(null);

	useEffect(() => {
		map(shortcuts, (action, shortcut) =>
			new Mousetrap(peek(boxRef).current).bind(shortcut, () => {
				actions[action](currentBox);
				return false;
			}));

		remainingBoxes.length === 0 && boxRef.current.focus();
	}, [boxRef.current]);

	return <div ref={ boxRef } tabIndex="-1" style={ style } className="box">
		<input type="number"/>
		{	remainingBoxes.length
			? <Box key={ length }{ ...{ ...context, data: remainingBoxes } }/>
			: null	}
	</div>;
};

const App = (context) => Box({ ...context, data: context.state.boxes });

export default App;
