const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newlastName) {
    this.lastName = newlastName;
  }
}

//One way to use object.create()
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Jones';
mary.age = 30;

console.log(mary);
console.log(mary.greeting());
mary.getsMarried('Gupta');
console.log(mary.greeting());

//Second way to define object.create()
const brad = Object.create(personPrototypes, {
  firstName: {value : 'Brad'},
  lastName: {value : 'Traversy'},
  age: {value: 30}
});

console.log(brad);
console.log(brad.firstName);
console.log(brad.greeting());