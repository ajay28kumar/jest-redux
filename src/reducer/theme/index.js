import { CHANGE_THEME, RESET_THEME } from '../../action_types';

export const initialState = {
	themes: 'default'
};

const theme = (state = initialState, action)  => {
	switch (action.type) {
		case CHANGE_THEME:
			return {
				...state,
				theme: action.payload
			};
		case RESET_THEME:
			return {
				...state,
				...initialState
			};
		default:
			return state;
	}
};

export default theme;


