//First Exercise
const fruits = new Array;
fruits.push ('apple'); 
fruits.push ('banana', 'orange');
console.log('The length of this array is: '+ fruits.length);
console.log(fruits);

//Second Exercise
const numbers = [1, 2, 3, 4, 5];
let lastNumber = numbers.pop();
console.log('Last number which was removed is: ' + lastNumber);
console.log(numbers);
let firstNumber = numbers.shift();
console.log('First number which was removed is: ' + firstNumber);
console.log(numbers);

//Third Exercise
const colors = new Array ('red', 'green', 'blue', 'yellow');
let indexOfGreen = colors.indexOf('green');
console.log('The index of green colour is: '+ indexOfGreen);
let isThereOrange = colors.includes('orange');
console.log('Is there orange colour in the array? ' + isThereOrange);

//Fourth Exercise
const names = ['John', 'Jane', 'Mike', 'Jennifer'];
names.unshift('David');
console.log(names);
let indexOfMike = names.indexOf('Mike');
console.log('The index of Mike is: '+ indexOfMike);

//Fifth Exercise
const numbers_2 = [2, 4, 6, 8, 10];
let isThereFive = numbers_2.includes(5);
let result = isThereFive ? "There is number 5" : "There is no 5 here";
console.log (result);
numbers_2.push (12);
console.log(numbers_2);

//Sixth Exercise
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthsCopy = months.slice(); //is created in order to save initial order of the array
console.log('Before sorting:' + months);
months.sort();
console.log('After sorting:' + months);

//Seventh Exercise
const filterMonths = months.filter ((element) => element.length > 3);
console.log('After filter:' + filterMonths);

//Eighth Exercise
let someMonths = monthsCopy.slice(6, 11);
console.log(someMonths);


//Nineth Exercise
let anotherArrayOfMonts = months.filter ((element) => element.length > 5);
console.log(anotherArrayOfMonts.join('-'));

