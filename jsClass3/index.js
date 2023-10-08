// // This is the third class in which we will be learning about in-built functions and arrays in JS
// console.log('Hello world!');

// // Primitive string
// let lastName = 'Singh';

// // using dot notation with the string of type Primitive makes JS consider the string as an Object
// lastName.charAt(0);

// // Creating a string using the String constructor function
// let firstName = new String('Ramandeep');

// let firstMessage = 'This is my first message';

// let words = firstMessage.split(' ');
// console.log(words);


// // Template literal using placeHolder
// let secondMessage = 
// `Hello ${firstName},
// You're best!

// Regards,
// Ramandeep Singh`;


// console.log(secondMessage);

// // using date built-in object

// // printing current date and time
// let date1 = new Date();
// console.log(date1);

// let date2 = new Date('June 20 1998 07:15');
// console.log(date2);

// // indexing of month is being done from 0 -> January
// let date3 = new Date(1998, 5, 20, 7);
// console.log(date3);

// let numbers = [1,4,5,6,7];
// console.log(numbers);

// // insertion at end -> push
// numbers.push(9);

// // insertion at beginning -> unshift
// numbers.unshift(8);

// // insertion in middle -> splice
// numbers.splice(2,0,'a','b','c');

// console.log('Numbers array after all insertions: ' + numbers);

// // Searching in an array

// console.log('Index of 9 in \"numbers" array: ' + numbers.indexOf(9));
// // if an element is not present in an array, indexOf(element) returns -1


// // We wantto check if a number exists in an array
// console.log(numbers.includes(1));

// // looking for the index of a number with given searching index
// // checks the index of 1 starting from 2nd index
// console.log(numbers.indexOf(1, 2));

// We can compare primitives with indexOf()
// We can't compare objects with indexOf(
let courses = [
    {code: 1, name: 'Java'},
    {code: 2, name: 'Python'}
];
console.log(courses);

// using callback function for searching objects

let course = courses.find(function(course){
    return course.name==='Java';
})

console.log(course);

// if the course is not present in the array, then it returns undefined

// Arrow function

let course2 = courses.find(course => course.name === 'Python');