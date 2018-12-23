import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const App = () => {
    return (
   	 <Jumbotron>

   		 <h1>Olá iMasters!</h1>
    	<p>Este é um exemplo do Componente Jumbotron construído com o React-Boostrap!</p>
    	<p><Button bsStyle="primary">Aprenda mais!</Button></p>

   	 </Jumbotron>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))