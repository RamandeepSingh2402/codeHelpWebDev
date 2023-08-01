console.log('lets start');

// creating an object
// while creating objects and defining properties of objects, using objects in programming is called Object Oriented Programming

// an object can be const, let, var, anything
// let rectangle = {
//     length: 1,
//     breadth: 2,
    // creating a function:
    // draw : function() {
    //     console.log('drawing rectangle');
    // }
    // we can call draw like this as well:
    // draw() {
    //     console.log('drawing rectangle');
    // }
// };

// factory function
function createRectangle(length, breadth) {
    
    return rectangle = {
        length,
        breadth,
       
        // creating a function:
        draw : function() {
            console.log('drawing rectangle');
        }

        // we can use length and breadth like this as well:
        // length: length,
        // breadth: breadth,
    };
 
}

// using factory function to create rectangle
let rectangle1 = createRectangle(5,4);
let rectangle2 = createRectangle(3,2);
let rectangle3 = createRectangle(4,5);


// Camelcase -> numberOfStudents
// constructor function -> Pascal notation is followed in using constructor function
// Pascal notation -> First letter of every word is Capital -> NumberOfStudents
// Constructor function -> properties/methods -> initialize (basically constructor function initializes/defines the properties and the methods of a function)

function Rectangle (length, breadth) {
    this.length = length;
    this.breadth = breadth;
    this.draw = function () {
        console.log('Drawing rectangle');
    }
};

// object creation using constructor
// 'new' is a keyword that returns an empty object
let rectangleObject = new Rectangle(4,5); 

// Dynamic nature of objects
// adding new property to an object
rectangleObject.color = 'Yellow';
console.log(rectangleObject);

// removing a property of an object
delete rectangleObject.color;
console.log(rectangleObject);

// Constructor property
 
// How are the functions created in the backdround?
let Rectangle1 = new Function (
    'length',
    'breadth',
    `
        this.length = length;
        this.breadth = breadth;
        this.draw = function () {
            console.log('Drawing rectangle1');
        }
    `
)
let newRectangle1 = new Rectangle1(2,99);
console.log(newRectangle1);


// PRIMITIVE VS REFERENCE DATA TYPES:

// For primitive data type:
let a = 10;
let b = a;

a++;
console.log('a: ' + a);
console.log('b: ' + b);

// For reference data type:
let c = {
    value: 10
};
let d = c;
c.value++;
console.log('Value of c.value: ' + c.value);
console.log('Value of d.value: ' + d.value);

let x = 10;
function increase(x) {
    x++;
}

increase(x);
console.log('The value of x is: ' + x);

// ITERATING THROUGH OBJECTS:
let newRectangle = {
    length: 2,
    breadth: 3
};

// for in loop
for(let key in newRectangle){
    // keys are reflected through key variable
    // values are reflected through rectangle[key]
    console.log('Using for-in loop: ' + key, newRectangle[key]);
}

// for-of loop
// can be applied only on iterables: Arrays, Maps
// Applying for-of loop on an object:

/*
    * If we simply use:
        for (let key in newRectanlge) {
            console.log(key);
        }
    * This throws an error "newRectangle is not iterable"
*/

/* 
    for using for-of on Objects, we need to convert the keys of the object into an array 
    using Object.keys(nameOfObject) property, which essentially converts the keys of the objects into an array of the keys
    using Object.entries(nameOfObject) prints all the key value pairse
*/  
for(let key of Object.entries(newRectangle)) {
    console.log(key);
}

if('color' in newRectangle) {
    console.log('Present');
}
else {
    console.log('Not present');
}

// OBJECT CLONING

let src = {
    a: 10,
    b: 20,
    c: 30
};

let src2 = {value: 10};

// CLONING USING ITERATION
let dest = {};
for(let key in src) {
    dest[key] = src[key];
}
console.log('Cloned using ITERATION: ' + dest.a + ' ' +  dest.b + ' ' + dest.c);

// CLONING USING ASSIGN
let dest1 = Object.assign({},src, src2);
console.log('Cloned using ASSIGN: ');
console.log(dest1);

// CLONING USING SPREAD
let dest2 = {...src};
console.log('Cloned using SPREAD: ' + dest2.a + ' ' + dest2.b + ' ' + dest2.c);