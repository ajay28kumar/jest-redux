import { Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import store from '../store';
import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFound from '../routes/404';


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
						<Header selectedRoute={'select'} changeTheme={this.changeTheme} />
						<Router>
							<Home path="/" />
							<Profile path="/profile/" user="me" />
							<Profile path="/profile/:user" />
							<NotFound default />
						</Router>
					</div>
				</ThemeProvider>
			</Provider>
		);
	}
}
