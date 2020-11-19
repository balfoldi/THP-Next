class Item {
  constructor(name, sellIn, quality) {
    this.MIN_QUALITY = 0;
    this.MAX_QUALITY = 50;

    const isConjured = /^conjured*/i.test(name);

    this.NORMAL_DECREASE = isConjured ? 2 : 1;
    this.QUICK_DECREASE = 2;

    this.SPECIAL_ITEMS = {
      'EVERGREEN': [
        'Sulfuras, Hand of Ragnaros'
      ],
      'IMPROVING': [
        'Aged Brie'
      ],
      'IMPROVING_UNTIL_DEADLINE': [
        'Backstage passes to a TAFKAL80ETC concert'
      ],
    };

    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;

    this._limitQuality();
    this._initType();
  }

  // ------------------------------------------------------
  // -
  // -    Private methods
  // -
  // ------------------------------------------------------

  _limitQuality() {
    this.quality = Math.max(this.quality, this.MIN_QUALITY);
    this.quality = Math.min(this.quality, this.MAX_QUALITY);
  }

  _initType() {
    if (this.SPECIAL_ITEMS['EVERGREEN'].includes(this.name)) {
      this.type = 'EVERGREEN';
      return;
    }
    if (this.SPECIAL_ITEMS['IMPROVING'].includes(this.name)) {
      this.type = 'IMPROVING';
      return;
    }
    if (this.SPECIAL_ITEMS['IMPROVING_UNTIL_DEADLINE'].includes(this.name)) {
      this.type = 'IMPROVING_UNTIL_DEADLINE';
      return;
    }
    this.type = 'NORMAL';
  }

  // ------------------------------------------------------
  // -
  // -    Public methods
  // -
  // ------------------------------------------------------

  updateSellIn() {
    if (this.type === 'EVERGREEN') {
      return;
    }

    this.sellIn -= 1;
  }

  updateQuality() {
    if (this.type === 'EVERGREEN') {
      return;
    }

    if (this.type === 'IMPROVING') {
      this.quality += 1;
    } else if (this.type === 'IMPROVING_UNTIL_DEADLINE') {
      if (this.sellIn <= 0) {
        this.quality = 0;
        return;
      }

      let increase = (this.sellIn <= 10) ? 2 : 1;
      if (this.sellIn <= 5) {
        increase = 3;
      }
      this.quality += increase;
    } else {
      this.quality -= (this.sellIn <= 0) ? this.QUICK_DECREASE : this.NORMAL_DECREASE;
    }

    this._limitQuality();
  }

  getValues() {
    return {
      name: this.name,
      sellIn: this.sellIn,
      quality: this.quality,
    }
  }
}

module.exports = Item;
