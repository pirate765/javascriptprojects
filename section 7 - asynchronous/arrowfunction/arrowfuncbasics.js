// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

//One line return
// const sayHello = () => 'Hello';

//Object Literal needs extra paranthese else treated as function
// const sayHello = () => ({msg: 'Hello'});

//Single params does not need parantheses 
// const sayHello = name => (console.log('Hello',name));

// Multiple params need parantheses
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);


//Arrow Functions as Callback
const users = ['Nathans', 'John', 'Williams'];

//Arrow Functions as callbacks
// const nameLengths = users.map(function(name){
//   return name.length;
// });


//Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });


//Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);


