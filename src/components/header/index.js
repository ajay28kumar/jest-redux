import { Component } from 'preact';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export default class Header extends Component {
	render() {
		const { classes } = this.props || {};
		const { title, menuButton } = classes || {};
		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" className={menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={title}>
							News
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
