import React from 'react';
import content from './content.js'
import './carousel.css'

import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

export default class MeuCarrossel extends React.Component {

	render() {
		return (
			<div id="carousel">
				<Carousel> 
					{content.map((item, index) => (
						<Carousel.Item>
						<img width={900} height={500} alt="900x500" src= {item.image} />
						<Carousel.Caption>
						  <h3>{item.title}</h3>
						  <p>{item.description}</p>
						  <Button href = {item.link}>{item.button}</Button>
						</Carousel.Caption>
					  </Carousel.Item>
					))}
				</Carousel>
			</div>
		);
	}
}


/*
<Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
*/