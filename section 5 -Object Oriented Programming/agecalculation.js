//Person Constructor
function Person(name, dob){
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    // console.log(diff/31536000/1000);
  }
}

// const brad = new Person('brad', 30);
// const harish = new Person('harish', 25);
// console.log(this);
// this.alert('hello');

const brad = new Person('Brad', '06-29-1996');
const shefu = new Person('shefu', '12-15-1995');
console.log(brad.calculateAge());
console.log(shefu.calculateAge());
console.log(shefu);
// console.log(new Date(0));
