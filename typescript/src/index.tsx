import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/Header';
import { User } from 'types/models.d';

// FROM API
const myUser: User = {
    name: 'Polo',
    age: 15,
    isLogged: false,
    role: 'admin',
}
///////////

const App = (): JSX.Element => (
    <div className="App">
        <h1>Hello world!</h1>
        <Header user={myUser} onClickLogout={() => { console.log('Log out');  }} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
