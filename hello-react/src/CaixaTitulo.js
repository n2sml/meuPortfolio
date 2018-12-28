import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class CaixaTitulo extends Component {
	render() {
		return (
			<ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
			<div className='row'>
			<h1>Nícolas Silva</h1>
			<h2>Front-End and Java Developer</h2>        
			</div>
			</ReactCSSTransitionGroup>
			);
		}
	}

	export default CaixaTitulo;