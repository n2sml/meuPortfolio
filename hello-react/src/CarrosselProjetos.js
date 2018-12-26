import React, { Component } from 'react';

import MeuCarrossel from './MeuCarrossel.js';

class CarrosselProjetos extends Component {
  render() {
    return (
		<div className = "col-3">			
			<b>Meus Projetos:</b>
			<MeuCarrossel/>
		</div>
	
    );
  }
}

export default CarrosselProjetos;