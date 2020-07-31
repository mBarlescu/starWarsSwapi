import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	titles: {
		'&:hover': {
			color: '#1890ff',
			cursor: 'pointer',
		},
	},
	titleSelected: {
		color: '#1d39c4',
			'&:hover': {
				color: '#1890ff',
				cursor: 'pointer',
			},
	},
	header: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	metaData: {
		display: 'flex',
		justifyContent: 'space-around',
	}
})