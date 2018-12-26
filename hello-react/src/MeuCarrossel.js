import { Carousel } from 'react-bootstrap';
import React, { Component } from 'react';

export default class MeuCarrossel extends React.Component {
	
  render() {
	  let width = 259;
	  let height = 194;
    return (	
	<Carousel>
	  <Carousel.Item>
		<img width={width} height={height} alt="900x500" src= {require('./img/produto1.jpg')} />
		<Carousel.Caption>
		  <h3>First slide label</h3>
		  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		</Carousel.Caption>
	  </Carousel.Item>
	  <Carousel.Item>
		<img width={width} height={height} alt="900x500" src={require('./img/produto2.jpg')} />
		<Carousel.Caption>
		  <h3>Second slide label</h3>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</Carousel.Caption>
	  </Carousel.Item>
	  <Carousel.Item>
		<img width={width} height={height} alt="900x500" src={require('./img/produto3.jpg')} />
		<Carousel.Caption>
		  <h3>Third slide label</h3>
		  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		</Carousel.Caption>
	  </Carousel.Item>
	</Carousel>
    );
  }
}