import React from 'preact/compat';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home  from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';


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
	return (
		<Drawer open={sideDrawer} onClose={closeDrawer}>
			<div
				className={classes.list}
				role="presentation"
				onClick={closeDrawer}
			>
				<List>
					{['Home','Profile'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <Home /> : <AccountCircle />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</div>
		</Drawer>
	);
};