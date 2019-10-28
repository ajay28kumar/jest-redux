import { Component } from 'preact';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { TemporaryDrawer } from './drawer';
import React from 'preact/compat';

export default class Header extends Component {
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
							<MenuIcon onClick={() => this.setState({ sideDrawer: !this.state.sideDrawer })} />
						</IconButton>
						<Typography variant="h6" className={title}>
							PREACT APP
						</Typography>
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


/*
<TopAppBar className="topappbar">
					<TopAppBar.Row>
						<TopAppBar.Section align-start>
							<TopAppBar.Icon menu onClick={this.openDrawer}>
								menu
							</TopAppBar.Icon>
							<TopAppBar.Title>Preact app</TopAppBar.Title>
						</TopAppBar.Section>
						<TopAppBar.Section align-end shrink-to-fit onClick={this.openSettings}>
							<TopAppBar.Icon>settings</TopAppBar.Icon>
						</TopAppBar.Section>
					</TopAppBar.Row>
				</TopAppBar>
				<Drawer modal ref={this.drawerRef}>
					<Drawer.DrawerContent>
						<Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome}>
							<List.ItemGraphic>home</List.ItemGraphic>
							Home
						</Drawer.DrawerItem>
						<Drawer.DrawerItem selected={props.selectedRoute === '/profile'} onClick={this.goToMyProfile}>
							<List.ItemGraphic>account_circle</List.ItemGraphic>
							Profile
						</Drawer.DrawerItem>
					</Drawer.DrawerContent>
				</Drawer>
				<Dialog ref={this.dialogRef}>
					<Dialog.Header>Settings</Dialog.Header>
					<Dialog.Body>
						<div>
							Enable dark theme <Switch onClick={this.toggleDarkTheme} />
						</div>
					</Dialog.Body>
					<Dialog.Footer>
						<Dialog.FooterButton accept>OK</Dialog.FooterButton>
					</Dialog.Footer>
				</Dialog>
 */