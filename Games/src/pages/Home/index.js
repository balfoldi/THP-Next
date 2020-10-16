import './index.scss';

const Home = (appElement) => {
    const renderPage = (content) => {
        appElement.innerHTML = `
            <div class="Home">
                <div class="Home__header">
                    <h2 class="Home__header__title type-light">Bienvenue !</h2>
                </div>
                <div class="Home__content">
                    ${content}
                    <a href="#list">Voir les jeux récents</a>
                </div>
            </div>
        `;
    };

    renderPage('<p>Heureux de vous revoir.</p>');
};

export default Home;
