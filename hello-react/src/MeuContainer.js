import React, { Component } from 'react';

import CarrosselProjetos from './CarrosselProjetos.js';
import CaixaTitulo from './CaixaTitulo.js';
import CardSobreMim from './CardSobreMim.js';

import {Container} from 'reactstrap';


class MeuContainer extends Component {
	render() {
		return (
			<Container>
				<CaixaTitulo />
				<CardSobreMim />
				<CarrosselProjetos />
			</Container>
		);
	}
}

export default MeuContainer;