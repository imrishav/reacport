import React, { Component } from 'react'
import Navbar from './Navbar'
import HeaderContent from './HeaderContent'


export default class Header extends Component {
	render() {
		return (
			<div style={{ height: '80vh', background: '#eeeeee' }}>
				<Navbar />
				<HeaderContent />
			</div>
		)
	}
}
