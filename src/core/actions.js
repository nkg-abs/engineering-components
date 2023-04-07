/* eslint-disable no-magic-numbers */
const updateStyle = (context) => {
	const { state: { boxes }, data: { id }} = context;

	return {
		boxes: [
			...boxes.slice(0, id),
			{ ...boxes[id], style: { backgroundColor: 'red' }},
			...boxes.slice(id + 1),
		],
	};
};
const addChild = ({ state: { boxes }, config: { shortcuts }}) => ({
	boxes: [
		...boxes,
		{
			id: boxes.length,
			shortcuts: shortcuts,
			bubble: false,
		},
	],
});
const removeChild = (context) => ({
	boxes: context.state.boxes.slice(0, -1),
});

const actions = {
	updateStyle,
	addChild,
	removeChild,
};

export default actions;
