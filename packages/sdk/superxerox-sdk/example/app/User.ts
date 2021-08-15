export class User {
  constructor(public name: string = "no name", public age: Number = 35) {}
  hello(): string {
    return `Hi ${this.name} your age is ${this.age} `;
  }
}
