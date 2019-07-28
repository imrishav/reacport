import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Clippath from './components/Clippath'

import Header from './components/Header'
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Skills />
				<Projects />
				<Contact />
				<Footer />
			</div>


		)
	}
}
