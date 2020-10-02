class Paladin extends Character {
	name = 'Ulder';
	hp = 16;
	dmg = 3;
	mana = 160;

	specialAttacks = (victim) => {
		this.healingLightning(victim);
	}

	healingLightning = (victim) => {
		if (this.mana >= 40 && this.dealDamage(4, victim)) {
			console.log(" =>  Healing & lightning!");
			this.hp += 5;
			this.mana -= 40;
		}
	}
}