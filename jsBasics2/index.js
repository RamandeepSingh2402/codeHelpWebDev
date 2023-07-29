console.log('lets start');

// creating an object
// while creating objects and defining properties of objects, using objects in programming is called Object Oriented Programming

// an object can be const, let, var, anything
let rectangle = {
    length: 1,
    breadth: 2,

    // creating a function:
    draw : function() {
        console.log('drawing rectangle');
    }
    // we can call draw like this as well:
    // draw() {
    //     console.log('drawing rectangle');
    // }
};

// factory function
function createRectangle() {
    
    return rectangle = {
        length: 1,
        breadth: 2,
    
        // creating a function:
        draw : function() {
            console.log('drawing rectangle');
        }
    };
 
}