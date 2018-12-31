import React, { Component } from 'react';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import MeuCarrossel from './MeuCarrossel.js';


class CarrosselProjetos extends Component {
  render() {
    return (
      <Row className = 'carousel-content'>
       <h3>Meus Projetos</h3>  
        <Col xs={8} xsOffset={2}>
                 
          <MeuCarrossel/>


        </Col>
       
      </Row>
    );
  }
}

export default CarrosselProjetos;