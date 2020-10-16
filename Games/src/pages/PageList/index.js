import './index.scss';
import dayjs from 'dayjs';
import { API_URL, PAGE_SIZE } from '../../config';
import GameCard from '../../Components/GameCard';
import Button from '../../Components/Button';

const PageList = (appElement) => {
    let currentPage = 1;
    let currentSearchTerm = '';
    let articles = [];
    let isFetching = false;
    const maxPage = 3;

    const fetchGames = () => {
        if (currentPage > maxPage) {
            return;
        }

        const dateStart = dayjs().subtract(1, 'month');
        const dateEnd = dayjs().add(1, 'month');
        const dates = `${dateStart.format('YYYY-MM-DD')},${dateEnd.format('YYYY-MM-DD')}`;

        const url = `${API_URL}/games?ordering=-released&page_size=${PAGE_SIZE}&page=${currentPage}`;
        let finalUrl = `${url}&dates=${dates}`;
        if (currentSearchTerm) {
            finalUrl = `${url}&search=${currentSearchTerm}`;
        }

        isFetching = true;

        fetch(finalUrl)
            .then((response) => response.json())
            .then((data) => {
                handleFetchResults(data);
                isFetching = false;
            })
            .catch((error) => {
                renderPage(`<p class="type-error">${error.message}</p>`);
            });
    };

    const handleFetchResults = (data) => {
        if ((!data.results || data.results.length === 0) && articles.length === 0) {
            throw new Error('Aucun résultat trouvé !');
        }

        articles = [...articles, ...data.results];

        renderGames();
    };

    const handleSearch = () => {
        const { value } = document.getElementById('searchInput');
        const searchTerm = value.trim().replace(/\s+/g, '-');

        if (searchTerm !== currentSearchTerm) {
            currentSearchTerm = searchTerm;
            currentPage = 1;
            articles = [];
        }

        fetchGames();
    };

    const renderPage = (content) => {
        const oldSearchButton = document.getElementById('searchButton');
        if (oldSearchButton) {
            oldSearchButton.removeEventListener('click', handleSearch);
        }

        appElement.innerHTML = `
            <div class="PageList">
                <div class="PageList__header">
                    <h2 class="PageList__header__title">Les jeux les plus récents</h2>
                    <input
                        type="search"
                        class="PageList__header__input"
                        id="searchInput"
                        placeholder="Recherche..."
                        value="${currentSearchTerm}"
                    />
                    ${Button('searchButton', 'GO', 'secondary')}
                </div>
                <div class="PageList__content">${content}</div>
            </div>
        `;

        const newSearchbutton = document.getElementById('searchButton');
        newSearchbutton.addEventListener('click', handleSearch);
    };

    const handleClickLoadMore = (event) => {
        if (isFetching) {
            return;
        }
        const button = event.currentTarget;
        button.innerHTML = 'Chargement...';
        currentPage += 1;
        fetchGames();
    };

    const clearMoreButtonEvent = () => {
        const loadMoreButton = document.getElementById('loadMoreGames');
        if (loadMoreButton) {
            loadMoreButton.removeEventListener('click', handleClickLoadMore);
        }
    };

    const bindMoreButtonEvent = () => {
        const loadMoreButton = document.getElementById('loadMoreGames');
        if (loadMoreButton) {
            loadMoreButton.addEventListener('click', handleClickLoadMore);
            loadMoreButton.innerHTML = 'Charger plus';
        }
    };

    const renderGames = () => {
        clearMoreButtonEvent();

        renderPage(`
            <ul class="PageList__games">
                ${articles.map((game) => GameCard(game)).join('')}
            </ul>
            ${currentPage < maxPage
                ? `<div class="type-center margin-lg margin-y">
                        ${Button('loadMoreGames', 'Charger plus', 'primary')}
                    </div>`
                : ''}
        `);

        bindMoreButtonEvent();
    };

    renderPage('<p class="type-light">Chargement, veuillez patienter...</p>');
    fetchGames();
};

export default PageList;
