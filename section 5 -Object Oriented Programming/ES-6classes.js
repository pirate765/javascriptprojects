class Person {
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.first} ${this.last}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDiff = new Date(diff);
    return Math.abs(ageDiff.getUTCFullYear() - 1970);
  }
  getMarried(newLastName) {
    this.lastName = newLastName;
  }
  static addNumbers(x,y){
    return x + y;
  }
}

const shefu = new Person('Shefu', 'Singh', '12-15-1995');
shefu.getMarried('Gupta');
console.log(shefu);

// console.log(shefu.addNumbers(1,2));  ----> Displays error
console.log(Person.addNumbers(2,5));