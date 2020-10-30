import i18n from 'locales';
import { useHistory } from 'react-router';

const SwitchLanguage = () => {
    const history = useHistory();

    const handleChangeLanguage = (lang) => () => {
        i18n.changeLanguage(lang);
        history.push('/');
    };

    return (
        <div className="SwitchLanguage">
            {i18n.language.match(/^en/)?.length > 0 && (
                <button onClick={handleChangeLanguage('fr')}>Français</button>
            )}
            {i18n.language.match(/^fr/)?.length > 0 && (
                <button onClick={handleChangeLanguage('en')}>English</button>
            )}
        </div>
    );
};

export default SwitchLanguage;
