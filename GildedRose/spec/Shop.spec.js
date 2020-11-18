const { Shop, Item } = require('../src/gilded_rose');

describe("GildedRose Shop.updateQuality", () => {
  it("Ne fait rien quand on ne lui passe aucun item", () => {
    const gildedRose = new Shop();
    const results = gildedRose.updateQuality();
    expect(results).toBeInstanceOf(Array)
    expect(results).toHaveSize(0);
  });

  it("Baisse de 1 la qualité et le sellIn d'items normaux", () => {
    const listItems = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Mana Cake', 3, 6),
    ];

    const gildedRose = new Shop(listItems);
    const results = gildedRose.updateQuality();

    const expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 },
    ];

    expected.forEach((testCase, index) => {
      expect(results[index].quality).toBe(testCase.quality);
      expect(results[index].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Vérifie que la qualité ne descend pas en dessous de 0", () => {
    const listItems = [
      new Item('+5 Dexterity Vest', 10, 0),
      new Item('Mana Cake', 0, 0),
      new Item('Improbable Artifact', 0, -1),
      new Item('Magic stone', -2, 0),
    ];

    const gildedRose = new Shop(listItems);
    const results = gildedRose.updateQuality();

    const expected = [
      { sellIn: 9, quality: 0 },
      { sellIn: -1, quality: 0 },
      { sellIn: -1, quality: 0 },
      { sellIn: -3, quality: 0 },
    ];

    expected.forEach((testCase, index) => {
      expect(results[index].quality).toBe(testCase.quality);
      expect(results[index].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Vérifie que la qualité ne peut pas atteindre plus de 50", () => {
    const listItems = [
      new Item('Aged Brie', 10, 49),
      new Item('Aged Brie', 15, 50),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48),
      new Item('Mana Cake', 4, 52),
    ];

    const gildedRose = new Shop(listItems);
    const results = gildedRose.updateQuality();

    const expected = [
      { sellIn: 9, quality: 50 },
      { sellIn: 14, quality: 50 },
      { sellIn: 4, quality: 50 },
    ];

    expected.forEach((testCase, index) => {
      expect(results[index].quality).toBe(testCase.quality);
      expect(results[index].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Baisse de 2 la qualité quand la date de péremption est dépassée", () => {
    const listItems = [
      new Item('+5 Dexterity Vest', 0, 20),
      new Item('Mana Cake', 0, 6),
    ];

    const gildedRose = new Shop(listItems);
    const results = gildedRose.updateQuality();

    const expected = [
      { sellIn: -1, quality: 18 },
      { sellIn: -1, quality: 4 },
    ];

    expected.forEach((testCase, index) => {
      expect(results[index].quality).toBe(testCase.quality);
      expect(results[index].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmente la qualité de 1 pour 'Aged Brie' et 'Backstage passes'", () => {
    const listItems = [
      new Item('Aged Brie', 20, 30),
      new Item('Aged Brie', 0, 45),
      new Item('Backstage passes to a TAFKAL80ETC concert', 20, 30),
    ];

    const gildedRose = new Shop(listItems);
    const results = gildedRose.updateQuality();

    const expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: -1, quality: 46 },
      { sellIn: 19, quality: 31 },
    ];

    expected.forEach((testCase, index) => {
      expect(results[index].quality).toBe(testCase.quality);
      expect(results[index].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmente la qualité de 2 pour 'Backstage passes' quand il reste moins de 10 jours", () => {
    const listItems = [
      new Item('Aged Brie', 9, 30),
      new Item('Backstage passes to a TAFKAL80ETC concert', 9, 30),
    ];

    const gildedRose = new Shop(listItems);
    const results = gildedRose.updateQuality();

    const expected = [
      { sellIn: 8, quality: 31 },
      { sellIn: 8, quality: 32 },
    ];

    expected.forEach((testCase, index) => {
      expect(results[index].quality).toBe(testCase.quality);
      expect(results[index].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmente la qualité de 3 pour 'Backstage passes' quand il reste moins de 5 jours", () => {
    const listItems = [
      new Item('Aged Brie', 4, 30),
      new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30),
    ];

    const gildedRose = new Shop(listItems);
    const results = gildedRose.updateQuality();

    const expected = [
      { sellIn: 3, quality: 31 },
      { sellIn: 3, quality: 33 },
    ];

    expected.forEach((testCase, index) => {
      expect(results[index].quality).toBe(testCase.quality);
      expect(results[index].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Vérifie que 'Sulfuras' ne perd jamais en qualité", () => {
    const listItems = [
      new Item('Mana Cake', 15, 12),
      new Item('Sulfuras, Hand of Ragnaros', 10, 22),
    ];

    const gildedRose = new Shop(listItems);
    const results = gildedRose.updateQuality();

    const expected = [
      { sellIn: 14, quality: 11 },
      { sellIn: 10, quality: 22 },
    ];

    expected.forEach((testCase, index) => {
      expect(results[index].quality).toBe(testCase.quality);
      expect(results[index].sellIn).toBe(testCase.sellIn);
    });
  });
});
