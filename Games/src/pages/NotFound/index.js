import './index.scss';

const NotFound = (appElement) => {
    const pageTemplate = `
    <div class="NotFound">
        <p>Cette page n'existe pas.</p>
        <a href="#">Retour à l'accueil</a>
    </div>
    `;

    appElement.innerHTML = pageTemplate;
};

export default NotFound;
