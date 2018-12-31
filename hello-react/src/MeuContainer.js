import React, { Component } from 'react';

import CarrosselProjetos from './CarrosselProjetos.js';
import CaixaTitulo from './CaixaTitulo.js';
import CardSobreMim from './CardSobreMim.js';
import Contato from './Contato.js'; 

import {Grid} from 'react-bootstrap';


class MeuContainer extends Component {
	render() {
		return (
			<Grid>
				<CaixaTitulo />
				<CardSobreMim />
				<CarrosselProjetos />
				<Contato/>
			</Grid>
		);
	}
}

export default MeuContainer;