import { Component } from 'preact';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Settings from '@material-ui/icons/Settings';
import withStyles  from '@material-ui/styles/withStyles';
import { TemporaryDrawer } from './drawer';

const styles =(theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
});

class Header extends Component {
	state = {
		sideDrawer: false
	};
	closeDrawer = () => {
		this.setState({
			sideDrawer: false
		});
	};
	render() {
		const { classes } = this.props || {};
		const { title, menuButton } = classes || {};
		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" className={menuButton} color="inherit" aria-label="menu">
							<MenuIcon
								onClick={() => this.setState({ sideDrawer: !this.state.sideDrawer })}
							/>
						</IconButton>
						<Typography variant="h6" className={title}>
							Preact App
						</Typography>
						<Settings onClick={this.props.changeTheme} />
					</Toolbar>
				</AppBar>
				<TemporaryDrawer
					sideDrawer={this.state.sideDrawer}
					closeDrawer={this.closeDrawer}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(Header);
