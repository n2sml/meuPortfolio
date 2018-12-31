import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import content from './content.js'
import './carousel.css'

import { Button } from 'react-bootstrap';

export default class MeuCarrossel extends React.Component {

	render() {
		return (
			<div id="carousel">
				<Slider autoplay={4000}> 
					{content.map((item, index) => (
						<div class ='img-div'
							key={index}
							style={{ background: `url('${item.image}') no-repeat center center` }}
						>
							<div className="center">
								<h4><b>{item.title}</b></h4>
								<p><b>{item.description}</b></p>
								<Button target="_blank" href = {item.link}>{item.button}</Button>
							</div>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}