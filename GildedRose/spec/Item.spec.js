const Item = require('../src/Item');

describe("GildedRose Item.constructor", () => {
  it("Instancie correctement un item normal", () =>  {
    const item = new Item('Mana Cake', 20, 55);
    expect(item.name).toBe('Mana Cake');
    expect(item.sellIn).toBe(20);
    expect(item.quality).toBe(50);
    expect(item.type).toBe('NORMAL');
    expect(item.NORMAL_DECREASE).toBe(1);
  });

  it("Instancie correctement un item normal même si on lui passe une qualité > 50", () =>  {
    const item = new Item('Mana Cake', 20, 55);
    expect(item.quality).toBe(50);
  });

  it("Instancie correctement un item normal même si on lui passe une qualité < 0", () =>  {
    const item = new Item('Mana Cake', 20, -2);
    expect(item.quality).toBe(0);
  });

  it("Instancie correctement un item 'Sulfuras'", () =>  {
    const item = new Item('Sulfuras, Hand of Ragnaros', 10, 15);
    expect(item.name).toBe('Sulfuras, Hand of Ragnaros');
    expect(item.sellIn).toBe(10);
    expect(item.quality).toBe(15);
    expect(item.type).toBe('EVERGREEN');
  });

  it("Instancie correctement un item spécial 'Aged Brie'", () =>  {
    const item = new Item('Aged Brie', 10, 15);
    expect(item.name).toBe('Aged Brie');
    expect(item.sellIn).toBe(10);
    expect(item.quality).toBe(15);
    expect(item.type).toBe('IMPROVING');
  });

  it("Instancie correctement un item spécial 'Backstage'", () =>  {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 15);
    expect(item.name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(item.sellIn).toBe(10);
    expect(item.quality).toBe(15);
    expect(item.type).toBe('IMPROVING_UNTIL_DEADLINE');
  });

  it("Instancie correctement un item 'Conjured'", () => {
    const item = new Item('Conjured testing object', 13, 25);
    expect(item.name).toBe('Conjured testing object');
    expect(item.NORMAL_DECREASE).toBe(2);
  });

  it("Instancie correctement un item 'Conjured' même en majuscules", () => {
    const item = new Item('ConJurED testing object', 13, 25);
    expect(item.name).toBe('ConJurED testing object');
    expect(item.NORMAL_DECREASE).toBe(2);
  });
});

describe("GildedRose Item.updateSellIn", () => {
  it("Décrémente le sellIn de 1 pour un item normal", () => {
    const item = new Item('Mana cake', 10, 5);
    item.updateSellIn();
    expect(item.sellIn).toBe(9);
  });

  it("Ne change pas le sellIn pour un item du type 'Sulfuras'", () => {
    const item = new Item('Sulfuras, Hand of Ragnaros', 12, 25);
    item.updateSellIn();
    expect(item.sellIn).toBe(12);
  });
});

describe("GildedRose Item.updateQuality", () => {
  it("Décrémente la quantité de 1 pour un Item 'normal' quand sellIn > 0", () => {
    const item = new Item('Mana cake', 10, 15);
    item.updateQuality();
    expect(item.quality).toBe(14);
  });

  it("Décrémente la quantité de 2 pour un Item 'normal' quand sellIn <= 0", () => {
    const item = new Item('Mana cake', -1, 15);
    item.updateQuality();
    expect(item.quality).toBe(13);
  });

  it("Incrémente la quantité de 1 pour un Item spécial 'Aged Brie'", () => {
    const item = new Item('Aged Brie', 10, 15);
    item.updateQuality();
    expect(item.quality).toBe(16);
  });

  it("Incrémente la quantité de 1 pour un Item spécial 'Aged Brie' même si sellIn < 0", () => {
    const item = new Item('Aged Brie', -1, 15);
    item.updateQuality();
    expect(item.quality).toBe(16);
  });

  it("Met la qualité à 0 si sellIn est égal à 0 pour un item spécial 'Backstage'", () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 15);
    item.updateQuality();
    expect(item.quality).toBe(0);
  });

  it("Met la qualité à 0 si sellIn est inférieur à 0 pour un item spécial 'Backstage'", () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', -2, 15);
    item.updateQuality();
    expect(item.quality).toBe(0);
  });

  it("Ajoute 3 de qualité si sellIn est inférieur à 5 pour un item spécial 'Backstage'", () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 15);
    item.updateQuality();
    expect(item.quality).toBe(18);
  });

  it("Ajoute 2 de qualité si sellIn est inférieur à 10 pour un item spécial 'Backstage'", () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 15);
    item.updateQuality();
    expect(item.quality).toBe(17);
  });

  it("Décrémente la quantité de 2 pour un Item 'Conjured' quand sellIn > 0", () => {
    const item = new Item('Conjured Mana cake', 10, 15);
    item.updateQuality();
    expect(item.quality).toBe(13);
  });

  it("Décrémente la quantité de 2 pour un Item 'Conjured' quand sellIn <= 0", () => {
    const item = new Item('Conjured Mana cake', -1, 15);
    item.updateQuality();
    expect(item.quality).toBe(13);
  });
});
