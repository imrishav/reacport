import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default class Skills extends Component {
	render() {
		return (
			<Grid container
				direction="row"
				justify="space-around"
				alignItems="center" style={{ background: 'green', height: '300px', 
			}}>
				<Grid item xs={12} md={6}>
					<Container>
						<div style={{ width: "100%", border: '2px solid black' }}>
							s
					</div>
					</Container>
				</Grid>
				<Grid item xs={12} md={6}>
					<Container>
						<div style={{ width: "100%", border: '2px solid black' }}>
							s
					</div>
					</Container>

				</Grid>
			</Grid>
		)
	}
}
