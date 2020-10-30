import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WorksNavBar from './NavBar';
import Work from 'pages/Work';

const WorksPage = () => {
    const { t } = useTranslation();

    return (
        <div className="WorksPage">
            <WorksNavBar />
            <div className="WorksPage__content">
                <Switch>
                    <Route path={`${t('routing:works')}/:workSlug`} component={Work} />
                </Switch>
            </div>
        </div>
    );
};

export default WorksPage;
