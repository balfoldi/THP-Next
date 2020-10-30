import './index.scss';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const { t } = useTranslation();

    return (
        <ul className="NavBar">
            <li className="NavBar__item">
                <NavLink to={t('routing:home')}>{t('home:title')}</NavLink>
            </li>
            <li className="NavBar__item">
                <NavLink to={t('routing:contact')}>{t('contact:title')}</NavLink>
            </li>
            <li className="NavBar__item">
                <NavLink to={t('routing:works')}>{t('works:title')}</NavLink>
            </li>
        </ul>
    );
};

export default NavBar;
