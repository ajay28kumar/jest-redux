/* eslint-env node, jest */
import { h , Component} from 'preact';
import { shallow } from 'enzyme';
import Home from '../../home';

describe('Home Page', () => {
	const home =shallow(<Home />);
	it('snapshot', () => {
		expect(home).toMatchSnapshot;
	});
});