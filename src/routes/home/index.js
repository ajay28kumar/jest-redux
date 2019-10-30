import {  Component } from 'preact';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles  from '@material-ui/core/styles/withStyles';
import style from './style.css';

const useStyles = {
	card: {
		minWidth: 275
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

export default withStyles(useStyles)(Home);
