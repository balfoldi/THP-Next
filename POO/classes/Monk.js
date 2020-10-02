class Monk extends Character {
	name = 'Moana';
	hp = 8;
	dmg = 2;
	mana = 200;

	specialAttacks = () => {
		this.heal();
	}

	heal = () => {
		if (this.mana >= 25) {
			console.log(" =>  Healing...");
			this.mana -= 25;
			this.hp += 8;
		}
	}
}
