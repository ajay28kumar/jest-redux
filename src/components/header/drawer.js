import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home  from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { route } from 'preact-router';


const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
	}
});

export const TemporaryDrawer = ({ sideDrawer, closeDrawer }) => {
	const classes = useStyles();
	const lists = [
		{
			name: 'Home',
			path: '/',
			icon: <Home />
		},
		{
			name: 'Profile',
			path: '/profile',
			icon: <AccountCircle />
		}
	];
	const toggleDrawer = () => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		closeDrawer();
	};
	return (
		<Drawer open={sideDrawer} onClose={toggleDrawer()}>
			<div
				className={classes.list}
				role="presentation"
				onClick={toggleDrawer()}
				onKeyDown={toggleDrawer()}
			>
				<List>
					{lists.map((item) => (
						<ListItem button key={item.name} onClick={() => route(item.path)}>
							<ListItemIcon>
								{item.icon}
							</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItem>
					))}
				</List>
			</div>
		</Drawer>
	);
};