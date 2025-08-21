export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
    
    // Check if this is a subclass that hasn't overridden the method
    if (this.constructor !== Building) {
      // Check if the method exists on the instance's own constructor prototype
      if (!this.constructor.prototype.hasOwnProperty('evacuationWarningMessage')) {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }
}
