import React, { Component } from 'react';

import MeuCarrossel from './MeuCarrossel.js';

class CarrosselProjetos extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <h2 className = 'project-label'><b>Meus Projetos</b></h2>
          <MeuCarrossel/>
        </div>
       
      </div>
    );
  }
}

export default CarrosselProjetos;