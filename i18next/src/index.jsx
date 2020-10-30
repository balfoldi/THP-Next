import './index.scss';
import './locales';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import Works from 'pages/Works';

const App = () => {
    const { t } = useTranslation();

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path={t('routing:home')} component={Home} />
                    <Route path={t('routing:contact')} component={Contact} />
                    <Route path={t('routing:works')} component={Works} />
                    <Route>
                        <p>Not Found</p>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
