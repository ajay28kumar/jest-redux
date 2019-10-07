import { UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_AGE, UPDATE_ABOUT } from '../../action_types';

export const initialState = {
	firstName: '',
	lastName: '',
	age: '',
	about: ''
};

const user = (state = initialState, action)  => {
	switch (action.type) {
		case UPDATE_FIRST_NAME:
			return {
				...state,
				firstName: action.payload
			};
		case UPDATE_LAST_NAME:
			return {
				...state,
				lastName: action.payload
			};
		case UPDATE_AGE:
			return {
				...state,
				age: action.payload
			};
		case UPDATE_ABOUT:
			return {
				...state,
				about: action.payload
			};
		default:
			return state;
	}
};

export default user;


