// // VARIABLES

// // Variables can not be a reserved keyword (let, if, var, etc). 
// // Variables should be meaningful and descriptive.
// // Variables can not start with a number.
// // Variables can not contain a space or hyphen, you have to use camelCase.

// let myName = 'Dave';
// console.log(myName);
// let firstName = 'Dave';
// let lastName = 'Tucker';
// console.log(firstName, lastName);

// // CONSTANTS

// const interestRate = 0.3;
// interestRate = 1;            // You can't re-use a constant like you can with a variable.  
// console.log(interestRate);     // Change 'const' to 'let', and the console returns the lowest value (1).

// // PRIMITIVE TYPES (AKA Value Types): Strings, Numbers, Booleans, Undefind, and Null

// let name = 'Dave';      // String Literal
// let age = 30;           // Number Literal
// let isApproved = false;  // Boolean Literal
// let firstName = undefined;  // if it's not initialized.  Not common.  It is both a type and a value.
// let selectedColor = null;     // Used when we want to explicity clear the value of a variable. AKA, user didn't select a color.

// // JavaScript is dynamic (vs static).  In static, variables can't be changed.  With dynamic, they can be changed.

// // REFERENCE TYPES: Objects, Arrays, Functions.
//   // Objects: like an object in real life.  A person has name, age, address (properties of the person Object).  Multiple variables.
// let person = {
//   name: 'Dave',
//   age: 33
// };

// // MAKING CHANGES TO THESE PROPERTIES
//   // Dot Notation
// person.name = 'John';
// person.age = 40

//   // Bracket Notation
// let selection = 'name';
// person[selection] = 'Mary'

// console.log(person.name, person.age);


// // ARRAYS: data structure used to represent a list of items.  Typically dealing with a list of objects (products in a shopping card, items a user has selected, etc.)

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors);


// FUNCTIONS: one of the fundamental building blocks.  A set of statements that performs a task or calculates a value.

  // Performing a task:
function greet(name, lastName) {              // function functionName(parameter) {body of the function}
  console.log('Hello '+name+' '+lastName);       // the parameter is a variable that is only meaningful inside this particular function.
}
greet('Dave', 'Tucker');       // Call the function wilth:  greet('argument')
                                  // argument is the value supplied for a particular parameter.

  // Calculating a value:
  function square(number) {
    return number * number;               // return is a reserve keyword
  }

  let number = square(6);                 // you don't need this line, see below
  console.log(number);

  console.log(square(6));                 // both these values return 36 in the console
                       
