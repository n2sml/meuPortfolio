import React, { Component } from 'react';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import DadosContato from './DadosContato.js'


export default class Contato extends Component {
  render() {
    return (
      <Row>
        <h3>Contatos</h3>
        {DadosContato.map((item, index) => (
          < Col sm={6} md={3} >
            <div className="contact-item">
              <h4><b>{item.title}</b></h4>
              <a href={item.description} title = {item.title}>
                <img className="contato-imagem" src={item.image} alt="null" ></img>
              </a>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}

