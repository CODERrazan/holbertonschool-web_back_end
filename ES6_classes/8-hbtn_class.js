// Exporting a default class called HolbertonClass
export default class HolbertonClass {
  // Constructor function that takes in size and location parameters
  constructor(size, location) {
    // Assigning the size parameter to the _size property
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this._size;
    }
    return null;
  }
}
