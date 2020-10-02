class Character {
	name;
	hp;
	dmg;
	mana;
	status = 'playing';
	shield = 0;
	isInvincible = false;
	
	constructor(name) {
		this.name = name;
	}

	initNewTurn = () => {};

	takeDamage = (damage) => {
		if (this.status !== 'playing') {
			console.log(`Hey why did I get attacked? I'm not playing!`);
			return 0;
		}

		if (this.isInvincible) {
			console.log(`Mouahahaha I'm untouchable!`);
			return 0;
		}

		const effectiveDamage = damage - this.shield;

		this.hp -= effectiveDamage;

		if (this.hp <= 0) {
			this.hp = 0;
			this.status = 'loser';
			console.log(`${this.name} just died!`);
		}

		return effectiveDamage;
	}

	dealDamage = (damage, victim) => {
		if (!victim) {
			console.error(`Please give a victim to attack!`);
			return false;
		}

		if (this.status !== 'playing') {
			console.log(`I can't attack, because I'm not playing.`);
			return false;
		}
		
		if (victim.status !== 'playing') {
			console.log(`Impossible to attack, because ${victim.name} is not playing.`);
			return false;
		}

		console.log(`${this.name} attacks ${victim.name}!!`);
		const effectiveDamage = victim.takeDamage(damage);

		if (effectiveDamage <= 0) {
			console.log(`Weak attack, ${victim.name} has dealt nothing... Didn't even hurt!`);
			return true;
		}
		
		console.log(`${this.name} made ${victim.name} lose ${effectiveDamage} hp, who has ${victim.hp} hp left.`);

		if (!victim.isAlive()) {
			this.mana += 20;
		}

		return true;
	}

	attacks = (victim) => {
		return this.dealDamage(this.dmg, victim);
	}

	specialAttacks = (victim) => {}

	isAlive = () => {
		return this.hp > 0;
	}
}