const fruits = [ { name: 'apple', price: 100}, {name:'oragne',price:80}, {name:'banana',price:120}];

// Function 01
var countFruits = () => fruits.length;
console.log(" countFruits() ",countFruits());

// Function 02
console.log( fruits.filter(fruit => fruit.price > 100) );

console.log( fruits.filter( (fruit) => fruit.price > 100) );

// Funciton 03
var inventory = fruits.map(fruit => ({name:fruit.name, storage:1}));
console.log(inventory);

// Function 04
var inventory02 = fruits.map(fruit => {
   console.log(" Checking "+fruit.name + ' storage ');
   return { name:fruit.name, storage :2 };
});

console.log(inventory02);

var sum = (a,b) => {return a+b};

console.log(" 3 + 3 = ",sum(3,3));