import React, { Component } from 'react';

import CarrosselProjetos from './CarrosselProjetos.js';
import CaixaTitulo from './CaixaTitulo.js';
import CardSobreMim from './CardSobreMim.js';

class Container extends Component {
	render() {
		return (
			<div className="container">
			<CaixaTitulo />
			<CarrosselProjetos />
			<CardSobreMim />
			</div>
			);
		}
	}

	export default Container;