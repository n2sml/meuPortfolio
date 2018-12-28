import React, { Component } from 'react';

import MeuCarrossel from './MeuCarrossel.js';


class CarrosselProjetos extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <h3>Meus Projetos</h3>
          <MeuCarrossel/>
        </div>
       
      </div>
    );
  }
}

export default CarrosselProjetos;