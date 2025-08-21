export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    // Setting the _sqft property to the value passed in the constructor
    this._sqft = sqft;
  }

  // Setter for the sqft property
  set sqft(sqft) {
    this._sqft = sqft;
  }

  // Getter for the sqft property
  get sqft() {
    return this._sqft;
  }
}
