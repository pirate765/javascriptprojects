function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  return `Hello ${this.firstName} ${this.lastName}. Have a nice day`;
}
const person1 = new Person('John', 'Doe');

//Customer Prototype
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}
//Inherting Prototype
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

//Overwriting inherited prototype
Customer.prototype.greeting = function() {
  return `Hello ${this.firstName} ${this.lastName}. Welcome to our company.`;
}

const customer1 = new Customer('Tushar', 'Gupta', '8889998888', 'ggh55');
console.log(customer1.greeting());
console.log(person1.greeting());