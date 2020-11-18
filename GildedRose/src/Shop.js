class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    return this.items.map((item) => {
      item.updateSellIn();
      item.updateQuality();
      return item.getValues();
    });
  }
}

module.exports = Shop;
