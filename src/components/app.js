import { Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme  from '@material-ui/core/styles/createMuiTheme';
import store from '../store';
import Header from './header';
import NotFound from '../routes/404';
import AsyncRoute from 'preact-async-route';


const theme = {
	spacing: 4,
	palette: {
		type: 'light',
		primary: {
			main: '#007bff'
		}
	}
};


export default class App extends Component {
	state = {
		theme: 'light'
	};
	changeTheme = () => {
		this.setState({
			theme: this.state.theme === 'light'  ? 'dark' : 'light'
		});
	};
	render() {
		theme.palette.type = this.state.theme;
		const themes = createMuiTheme(theme);
		return (
			<Provider store={store}>
				<ThemeProvider theme={themes}>
					<div id="app">
						<Header selectedRoute={'select'} changeTheme={this.changeTheme} activeTheme={this.state.theme === 'light'} />
						<Router>
							{/* eslint-disable-next-line react/jsx-no-bind */}
							<AsyncRoute path="/" getComponent={() => import('../routes/home').then(
								(module) => module.default,
							)}  loading={() => null}
							/>
							<AsyncRoute path="/profile" getComponent={() => import('../routes/profile').then(
								(module) => module.default,
							)}  loading={() => null}
							/>
							<NotFound default />
						</Router>
					</div>
				</ThemeProvider>
			</Provider>
		);
	}
}
