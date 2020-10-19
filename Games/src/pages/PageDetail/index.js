import './index.scss';

const PageDetail = (appElement, gameId) => {
    const renderPage = (content) => {
        appElement.innerHTML = `
            <div class="PageDetail">
                <div class="PageDetail__header">
                    <h2 class="PageDetail__header__title type-light">Bienvenue !</h2>
                </div>
                <div class="PageDetail__content">
                    ${content}
                    <a href="#list">Retour à la liste des jeux récents</a>
                </div>
            </div>
        `;
    };

    renderPage(`<p>TODO : Affichage des détails du jeu #${gameId} (après fetch)</p>`);
};

export default PageDetail;
