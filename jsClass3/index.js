// This is the third class in which we will be learning about in-built functions and arrays in JS
console.log('Hello world!');

// Primitive string
let lastName = 'Singh';

// using dot notation with the string of type Primitive makes JS consider the string as an Object
lastName.charAt(0);

// Creating a string using the String constructor function
let firstName = new String('Ramandeep');

let firstMessage = 'This is my first message';

let words = firstMessage.split(' ');
console.log(words);


// Template literal using placeHolder
let secondMessage = 
`Hello ${firstName},
You're best!

Regards,
Ramandeep Singh`;


console.log(secondMessage);

// using date built-in object

// printing current date and time
let date1 = new Date();
console.log(date1);

let date2 = new Date('June 20 1998 07:15');
console.log(date2);

// indexing of month is being done from 0 -> January
let date3 = new Date(1998, 5, 20, 7);
console.log(date3);
