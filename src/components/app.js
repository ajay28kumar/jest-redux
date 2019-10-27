import { Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFound from '../routes/404';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header selectedRoute={'select'} />
					<Router>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
						<NotFound default />
					</Router>
				</div>
			</Provider>
		);
	}
}
