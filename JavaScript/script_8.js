//First Exercise
let student = {
    name: 'John',
    lastName: 'Doe',
    faculty: 'history',
    year: 3
};

const getData = (studentObject) => {
    let { name, lastName, faculty, year } = studentObject;
    const studentArray = [];
    studentArray.push(`${name} ${lastName}`, faculty, year);

    return studentArray;
}

console.log(getData(student));


//Second Exercise
const colors = ['red', 'green', 'blue', 'violet'];

const getColor = (colorsArray) => {
    const [first, , third] = colorsArray;
    console.log(first);
    console.log(third);
}

getColor(colors);


//Third Exercise
const restFunction = (...anything) => anything;

console.log(restFunction(1, 2, 4, 5, 8, 10));


//Fourth Exercise
const numbersFirst = [1, 2, 3, 4, 5];
const numbersSecond = [6, 7, 8, 9, 10];

const combineNumbers = (firstArray, secondArray) => finalArray = [...firstArray, ...secondArray];

console.log(combineNumbers(numbersFirst, numbersSecond));


//Fifth Exercise
let language = { language: 'en' };
const studentAdvanced = (student, language) => finalStudent = { ...student, ...language };

console.log(studentAdvanced(student, language));


//Eight Exercise
const evenNumbers = [2, 4, 0, 100, 4, 11, 2602, 36];
const oddNumbers = [160, 3, 1719, 19, 11, 13, -21];

const findOutlier = (numbers) => {
    let even = numbers.filter((number) => number % 2 === 0);
    let odd = numbers.filter((number) => number % 2 !== 0);

    return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier(evenNumbers));
console.log(findOutlier(oddNumbers));


