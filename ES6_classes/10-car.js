export default class Car {
  // Creates a Car object.
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Creates a clone of the car object.
  cloneCar() {
    const origin = this;
    return Object.assign(Object.create(Object.getPrototypeOf(origin)), {
      _brand: undefined,
      _motor: undefined,
      _color: undefined,
    });
  }
}
