import './index.scss';
import { useTranslation } from 'react-i18next';
import SwitchLanguage from 'components/SwitchLanguage';
import NavBar from 'components/NavBar';

const Layout = ({ children }) => {
    const { t } = useTranslation();

    return (
        <main className="Layout">
            <header className="Layout__header">
                <h1>{t('common:i18n-demo')}</h1>
                <NavBar />
                <SwitchLanguage />
            </header>
            {children}
        </main>
    );
};

export default Layout;
