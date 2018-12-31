import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class CardSobreMim extends Component {
	render() {
		return (
			<Row>
				<h3>Sobre Mim </h3>
				<Col xs="12" sm = '6' id='pull'><p>Me chamo N&iacute;colas, tenho 22 anos e sou Recifense.</p>
					<p>Em 2017, comecei o curso de An&aacute;lise de Sistemas no Instituto Federal de Pernambuco.</p>
					<p>Com isso, adquiri conhecimentos pr&aacute;ticos e tive contato com:<br />
					<b>
					*   Linguagens como C++, Python, HTML, XML, SQL, e principalmente Java e Javascript;<br />
					*   Ferramentas como CSS, Bootstrap, React, Greenfoot, OpenCV, Swing, JavaFX, Firebase;<br />
					*   Manipula&ccedil;&otilde;es em bancos de dados relacionais (MySQL, SQLite e PostgreSQL) e n&atilde;o-relacionais (MongoDB);<br />
					*   Uso de resposit&oacute;rio git em projetos pessoais;</b></p>
				</Col>
				
				<Col xs="12" sm = '6' id='push'>
					<p>Assim como tive conhecimentos te&oacute;ricos com:<br /> <b>
					* Linguagens de programa&ccedil;&atilde;o de diferentes paradigmas (principalmente funcional, gen&eacute;rica, procedural e a minha paix&atilde;o, orientada &agrave; objetos);<br />
					* Algoritmos e estuturas de dados;<br />
					* Engenharia de requisitos, e por isso;<br />
					* O uso, o valor e a import&acirc;ncia do desenvolvimento &agrave;gil (principalmente Scrum);<br />
					</b></p>
					Fui monitor de Linguagem de Programa&ccedil;&atilde;o Orientada &agrave; Objetos, e atualmente sou estagi&aacute;rio no LabDexter, onde desenvolvo um software com a proposta de reconhecer e contar, em fotos tiradas por um microsc&oacute;pio, ovos do mosquito da Dengue, com a finalidade de mensurar a prolifera&ccedil;&atilde;o em determinados locais.
				</Col>

			</Row>
		);
	}
}


export default CardSobreMim;