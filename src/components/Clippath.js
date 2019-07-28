import React, { Component } from 'react'
import Navbar from './Navbar'


export default class Clippath extends Component {
	render() {
		return (
			<div style={{height: '200px', background: 'green',clipPath: "polygon(0 51%, 6% 54%, 33% 68%, 55% 76%, 91% 91%, 100% 87%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 99%, 0% 85%)" }}>
				
			</div>
		)
	}
}
