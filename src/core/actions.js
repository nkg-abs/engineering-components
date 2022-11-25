/* eslint-disable no-console */
/* eslint-disable no-magic-numbers */

const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});
const initializeCount = ({ data }) => ({
	count: data,
});
const updateStyle = (context) => {
	const { state: { boxes }, data: id } = context;

	return {
		boxes: [
			...boxes.slice(0, id),
			{ ...boxes[id], style: { backgroundColor: 'red' }},
			...boxes.slice(id + 1),
		],
	};
};
const addChild = ({ state: { boxes }}) => ({
	boxes: [
		...boxes,
		{
			id: boxes.length,
			shortcuts: {
				'ctrl+y': 'create',
				'ctrl+q': 'remove',
				'ctrl+d': 'toggle',
			},
			bubble: false,
		},
	],
});
const removeChild = (context) => ({
	boxes: context.state.boxes.slice(0, -1),
});
const toggleGreen = (context) => {
	const { state: { boxes }, data: id } = context;

	return {
		boxes: [
			...boxes.slice(0, id),
			{ ...boxes[id], style: { backgroundColor: 'green' }},
			...boxes.slice(id + 1),
		],
	};
};

const actions = {
	increaseCount,
	initializeCount,
	updateStyle,
	addChild,
	removeChild,
	toggleGreen,
};

export default actions;
