import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import i18n from 'locales';
import studyCases from 'data/studyCases';

const WorksNavBar = () => {
    const { language } = i18n;
    const { t } = useTranslation();

    return (
        <ul className="WorksNavBar">
            {studyCases.map((langs) => {
                if (!langs[language]) {
                    return null;
                }

                const { title, slug } = langs[language];
                return (
                    <li key={slug}>
                        <NavLink to={`${t('routing:works')}/${slug}`}>{title}</NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default WorksNavBar;
