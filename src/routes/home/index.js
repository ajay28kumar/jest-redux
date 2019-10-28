import { h, Component } from 'preact';
import { Card , CardHeader, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import style from './style.css';

const useStyles = {
	card: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
};

class Home extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div class={`${style.home} page`}>
				<h1>Home route</h1>
				<Card className={classes.card}>
					<CardHeader
						title="Home card"
						subheader="Welcome to home route"
					/>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							Sed ut perspiciatis unde omnis iste natus error sit
							voluptatem accusantium doloremque laudantium, totam
							rem aperiam, eaque ipsa quae ab illo inventore veritatis
							et quasi architecto beatae vitae dicta sunt explicabo.
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur
							aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt.
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary">OKAY</Button>
					</CardActions>
				</Card>

			</div>
		);
	}
}

/*
<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Home card</h2>
						<div class=" mdc-typography--caption">Welcome to home route</div>
					</div>
					<div class={style.cardBody}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</div>
					<Card.Actions>
						<Card.ActionButton>OKAY</Card.ActionButton>
					</Card.Actions>
				</Card>
 */

export default withStyles(useStyles)(Home);
