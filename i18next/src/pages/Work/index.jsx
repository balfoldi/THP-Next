import { useParams } from 'react-router';
import i18n from 'locales';
import studyCases from 'data/studyCases';

const WorkPage = () => {
    const { language } = i18n;
    const { workSlug } = useParams();

    const studyCase = studyCases.find((work) => (
        work[language].slug === workSlug
    ));

    if (!studyCase) {
        return 'Not Found';
    }

    const { title, content } = studyCase[language];

    return (
        <div className="WorkPage">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default WorkPage;
