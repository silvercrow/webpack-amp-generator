export class Greeter {
  constructor(person) {
    this._person = person;
  }

  greet() {
    return `Hello ${this._person.name}, I believe you are ${this._person.age} years old!`;
  }
}