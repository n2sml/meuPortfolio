import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' ; 

class CaixaTitulo extends Component {
	render() {
		return (
			<CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
			<div className='row'>
			<h1>Nícolas Silva</h1>
			<h2>Front-End and Java Developer</h2>        
			</div>
			</CSSTransitionGroup>
			);
		}
	}

	export default CaixaTitulo;