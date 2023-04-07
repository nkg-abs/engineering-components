import { range } from '@laufire/utils/collection';
import config from './config';

const boxData = {
	shortcuts: config.shortcuts,
	content: 'parent',
	bubble: false,
};

const seed = {
	boxes: [
		// eslint-disable-next-line no-magic-numbers
		...range(0, 2).map((id) => ({
			id,
			...boxData,
		})),
	],
};

export default seed;
