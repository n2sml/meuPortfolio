import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//É a partir dessa chamada que o sistema começa a rodar: 

export default class Index extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark">
                <span class="navbar-brand mb-0 h1">Navbar</span>
            </nav>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
