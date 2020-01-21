import { Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';
import AsyncRoute from 'preact-async-route';
import store from '../store';
import Header from './header';
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
					<Header selectedRoute={this.state.currentUrl} />
					<Router>
						<AsyncRoute path="/" getComponent={() => import('../routes/home').then(
							(module) => module.default,
						)} loading={() => null}
						/>
						<AsyncRoute path="/profile" getComponent={() => import('../routes/profile').then(
							(module) => module.default,
						)}  loading={() => null}
						/>
						<NotFound default />
					</Router>
				</div>
			</Provider>
		);
	}
}
