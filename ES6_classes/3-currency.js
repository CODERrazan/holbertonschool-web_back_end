export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and Setter for the atribute 'code'
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Getter and Setter for the atribute'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Method to show the complete currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
