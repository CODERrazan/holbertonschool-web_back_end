// This class represents an Airport
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Returns a string representation of the Airport object
  toString() {
    return `[object ${this._code}]`;
  }
}
