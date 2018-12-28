import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import content from './content.js'

export default class MeuCarrossel extends React.Component {

	render() {
		return (
			<div id="carousel">
				<Slider autoplay={4000}> 
					{content.map((item, index) => (
						<div
							key={index}
							style={{ background: `url('${item.image}') no-repeat center center` }}
						>
							<div className="center">
								<h3>{item.title}</h3>
								<p>{item.description}</p>
								<button>{item.button}</button>
							</div>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}