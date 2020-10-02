class Game {
	totalTurns = 10;
	turnLeft = 10;
	playersList = [];
	playersTurns = [];
	currentPlayerIndex = 0;

	startGame = () => {
		this.startTurn();
	}

	addPlayer = (player) => {
		this.playersList.push(player);
	}

	startTurn = () => {
		console.log(`----`);
		const turnNumber = this.totalTurns - this.turnLeft + 1;
		console.log(`Turn ${turnNumber} / ${this.totalTurns}`);

		this.playersList.forEach((player) => {
			player.initNewTurn();
		});

		this.playersTurns = this.playersList.filter((player) => (
			player.isAlive()
		));

		this.pickPlayerInTurn();
	}

	pickPlayerInTurn = () => {
		this.currentPlayerIndex = getRandomNumber(0, this.playersTurns.length - 1);
		const currentPlayerName = this.playersTurns[this.currentPlayerIndex].name;
		console.log(`It's time for ${currentPlayerName} to play.`);
	}

	nextPlayer = () => {
		this.playersTurns.splice(this.currentPlayerIndex, 1);

		if (this.playersTurns.length === 0) {
			this.nextTurn();
			return;
		}

		this.pickPlayerInTurn();
	}

	nextTurn = () => {
		this.turnLeft -= 1;
		if (this.turnLeft <= 0) {
			console.log("Game is over!");
			this.playersList.forEach(player => {
				if (player.isAlive()) {
					player.status = "winner";
				}
			});
		}

		console.log("Current stats are:");
		this.watchStats();
		if (this.turnLeft > 0) {
			this.startTurn();
		}
	}

	watchStats = () => {
		this.playersList.forEach(player => {
			if (!player.isAlive()) {
				console.log(`${player.name} is dead. RIP!`);
			} else {
				console.log("Toujours en vie:");
			}
			console.log(`${player.name}: ${player.hp} hp, ${player.dmg} dmg, ${player.mana} mana`);
		});
	}

	currentPlayerAttacks = (victim, isSpecialAttack = false) => {
		const player = this.playersTurns[this.currentPlayerIndex];
		if (player.name === victim.name) {
			console.log(`I can't attack myself!`);
			return;
		}

		if (isSpecialAttack) {
			player.specialAttacks(victim);
		} else {
			player.attacks(victim);
		}

		this.nextPlayer();
	}
}
