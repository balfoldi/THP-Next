const ulder = new Paladin('Ulder');
const grace = new Fighter('Grace');
const draven = new Berserker('Draven');
const moana = new Monk('Moana');
const carl = new Assassin('Carl');

const game = new Game();
game.addPlayer(ulder);
game.addPlayer(grace);
game.addPlayer(draven);
game.addPlayer(moana);
game.addPlayer(carl);

game.startGame();
