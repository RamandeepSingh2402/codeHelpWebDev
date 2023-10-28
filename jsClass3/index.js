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
// let courses = [
//     {code: 1, name: 'Java'},
//     {code: 2, name: 'Python'}
// ];
// console.log(courses);

// using callback function for searching objects

// let course = courses.find(function(course){
//     return course.name==='Java';
// })

// console.log(course);

// if the course is not present in the array, then it returns undefined

// Arrow function

// let course2 = courses.find(course => course.name === 'Python');

let numbers = [1, 2, 3, 4, 5, 6, 7];

// to remove the last element of the array
numbers.pop();
console.log(numbers);

// to remove the first element of the array
numbers.shift();
console.log(numbers);

// to remove the elements from the middle of the array
numbers.splice(2,1);
console.log(numbers);

// emptying an array
// first method: not recommended numbers = [];

// second method of emptying an array: making the length of the array equal to zero ~ empties all other variables referencing this array as well
numbers.length = 0;
console.log('Emptied array: ' + numbers);

// third method of emptying an array ~ using splice and removing all the elements of the array
numbers.splice(0,numbers.length);

// combining an array
let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(`Combined array: ` + combined);

// slicing an array
let sliced = combined.slice(2,3);
console.log(sliced); 

// using slice for the new array:
let marks = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(marks.splice(2,6));

// using splice by mentioning the starting index only makes it return the elements of the array after the starting point
let updatedMarks = [10,20,30,40,50,60,70,80];
console.log(updatedMarks.splice(2));

// using just the splice method without initial index creates the copy of the original array
console.log(updatedMarks.splice());

// using spread operator to combine the arrays
let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];
let combinedArr = [...firstArr, ...secondArr];
console.log('The combined array after using the spread operator: ' + combinedArr);

// creating a copy of an element using the spread operator
let copiedArr = [...combinedArr];
console.log(copiedArr);

// using for-of loop and for-each loop to iterate an array
let arr = [10, 20, 30, 40, 50];
console.log('Iterating an array using for-of loop: ');
for( let value of arr) {
     console.log(value);
}

// for-each loop uses call-back functions: 
console.log('Iterating an array using for-each loop: ');
arr.forEach( number => console.log(number) );

// using the join method to join the elements of the array
let numArr = [10, 20, 30, 40, 50, 60];
let joinedElements = numArr.join(', ');
console.log(joinedElements);

// splitting an array into multiple fragments on the basis of a particular thing
let message = 'Can we please split this message?';
let messageParts = message.split(' ');
console.log('The splitted message is as following: ');
console.log(messageParts);
console.log("The changed message with underscores is as follows: ");
console.log(messageParts.join('_'));

// sorting the arrays:
let unsortedArr = [60, 40, 50, 30, 20, 10];
console.log("Unsorted array: " + unsortedArr);
console.log("Sorted array (ascending order): " + unsortedArr.sort());
console.log("Sorted array (descending order): " + unsortedArr.reverse());