import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Clients from './components/Clients';

faker.locale = 'fr'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Liste des clients</h1>
                <Clients />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
