import './index.scss';
import dayjs from 'dayjs';

const GameCard = (gameData) => {
    const releaseDate = dayjs(gameData.released);
    return `
        <li class="GameCard card">
            <a href="#detail/${gameData.id}">
                ${gameData.background_image
                    ? `<img src="${gameData.background_image}" alt="${gameData.name}" class="GameCard__image" />`
                    : ``}
                <div class="card__content">
                    <h3 class="GameCard__name">
                        ${gameData.name}
                    </h3>
                    <p>Sorti le ${releaseDate.format('DD/MM/YYYY')}</p>
                </div>
            </a>
        </li>
    `;
};

export default GameCard;


