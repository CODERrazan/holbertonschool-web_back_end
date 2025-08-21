import Building from './5-building';

// Creating a new class called SkyHighBuilding that extends the Building class
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Setter method for the floors property
  set floors(floors) {
    this._floors = floors;
  }

  // Getter method for the floors property
  get floors() {
    return this._floors;
  }

  // Method that returns an evacuation warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
