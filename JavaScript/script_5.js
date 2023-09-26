//First Exercise
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Second Exercise
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log('The sum of all numbers is: ' + sum);

//Third Exercise
const names = ['John', 'Jane', 'Michael', 'Jennifer', 'Bobby'];
const namesLength = new Array;
for (let i = 0; i < names.length; i++) {
    namesLength.push(names[i].length)
}
console.log(namesLength);

//Fourth Exercise
const departaments = [
    ['HR Department', 'Alice Jones', 'David Bones'],
    ['Support Department', 'Eugen Smith', 'John Smith', 'Mary Bob'],
    ['Transport Department', 'Miley Cyrus', 'Justin Bieber', 'Selena Gomez'],
    ['Accounting Department', 'Carrie Bradshaw', 'Miranda Obama']];

for (let i = 0; i < departaments.length; i++) {
    for (let j = 0; j < departaments[i].length; j++) {
        console.log(departaments[i][j]);
    }
}
console.log('========================');
const employeesNames = new Array;
for (let i = 0; i < departaments.length; i++) {
    for (let j = 1; j < departaments[i].length; j++) { //we start with i=1 to avoid showing the department name
        employeesNames.push(departaments[i][j])
    }
}
employeesNames.sort();
console.log(employeesNames);

//Fifth Exercise
const keys = (obj) => {
    const keys = Object.keys(obj).length;
    return keys;
}
const person = { firstName: 'John', lastName: 'Doe', age: 30, profession: 'developer' };
console.log(keys(person));

//Sixth Exercise
const generateNumbers = (number) => {
    const numbersCopy = new Array;
    for (let i = 0; i <= number; i++) {
        numbersCopy.push(i)
    }
    return numbersCopy;
}
let n = 5;
console.log(generateNumbers(n));

//Seventh Exercise
const arrayNumbers = [5, 8, 2, 10, 3];
theBiggestNumber = arrayNumbers[0];
for (i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > theBiggestNumber) theBiggestNumber = arrayNumbers[i];
}
console.log("The biggest number in this array is: " + theBiggestNumber);

//Eight Exercise
const averageScore = (grades) => {
    let sum = 0;
    let count = 0;
    for (const value in grades) {
        sum += grades[value];
        count++;
    }
    const average = sum / count;
    return average;
}
const gradesStudent = { math: 8, literature: 7, history: 9 };
console.log(averageScore(gradesStudent));

//Nineth Exercise
const dog = new Object();
dog.name = 'Pluto';
dog.age = 5;
dog.color = 'brown';

const bornPuppies = (numberOfPuppies) => {
    const puppyNames = [];
    for (let i = 1; i <= numberOfPuppies; i++) {
        puppyNames.push(`Puppy_${i}`);
    }
    dog.puppies = puppyNames;
}
bornPuppies(5);
console.log(dog);
