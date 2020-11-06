import './index.scss';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';

const App = () => (
    <main className="App">
        <h1>Démo Mobx React</h1>
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    </main>
);

ReactDOM.render(<App />, document.getElementById('root'));
