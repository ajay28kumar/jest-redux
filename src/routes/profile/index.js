import React from 'preact/compat';
import {  Component } from 'preact';
import { Button } from '@material-ui/core';
import style from './style.css';


export default class Profile extends Component {
	state = {
		time: Date.now(),
		count: 10
	};
	componentDidMount() {
		this.timer = setInterval(this.updateTime, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};
	render({ user }, { time, count }) {
		return (
			<div class={`${style.profile} page`}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>
				<div>Current time: {new Date(time).toLocaleString()}</div>
				<p>
					<Button variant="contained" color="primary" onClick={this.increment}>Click Me</Button>
					Clicked {count} times.
				</p>
			</div>
		);
	}
}
