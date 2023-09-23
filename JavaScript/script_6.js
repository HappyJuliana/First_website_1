//First Exercise
const person = { name: 'John', age: 30, city: 'New-York' };

const showPerson = (obj) => {
    let keys = Object.keys(obj);
    let i = 0;
    while (i < keys.length) {
        let key = keys[i];
        console.log(`${key}: ${obj[key]}`);
        i++;
    }
};

showPerson(person);


//Second Exercise
let key = 'age';

const findKey = (obj, key) => {
    for (let k in obj) {
        if (k === key) {
            return true;
        }
    }
    return false;
};

console.log(findKey(person, key));


//Third Exercise 
let initialObject = { prop1: 'Hello', prop2: 'World', prop3: '!' };
let result = '';

const combineWords = (obj) => {
    let objKeys = Object.keys(obj);
    let i = 0;
    do {
        let currentKey = objKeys[i];
        let currentValue = initialObject[currentKey];
        result += currentValue;
        i++;

    } while (i < objKeys.length);
    return result;
};

console.log(combineWords(initialObject));


//Fourth Exercise
let str = 'Hello world, my name is Albert';

const getAmount = (str) => {
    if (typeof str === 'string') {
        let lowerStr = str.toLowerCase();
        let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        let i = 0;
        let vowelsAmount = 0;

        while (i < str.length) {
            let char = lowerStr[i];
            if (vowels.includes(char)) {
                vowelsAmount++;
            }
            i++;
        }
        return vowelsAmount;
    } else {
        console.error('Wrong format');
    }
};

console.log(getAmount(str));


//Fifth Exercise
let input = { John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] };

const getMedium = (initialObj) => {
    let resultObject = Object.assign({}, initialObj);

    for (element in initialObj) {
        let currentValue = initialObj[element];

        i = 0;
        let sum = 0;
        let medium = 0;
        let arrayLength = currentValue.length;

        while (i < arrayLength) {
            sum += currentValue[i];
            i++;
        }
        medium = sum / arrayLength;

        resultObject[element] = `medium: ${medium}`;
    }
    return resultObject;
};

console.log(getMedium(input));


//Sixth Exercise
let initialString = 'Hello, world!'

const reversedWords = (initialString) => {
    const initialStringArray = initialString.split('');
    const resultStringArray = [];
    let i = initialStringArray.length - 1;

    do {
        resultStringArray.push(initialStringArray[i]);
        i--;
    } while (i >= 0);
    let resultString = resultStringArray.join('');
    return resultString;
};

console.log(reversedWords(initialString));


//Seventh Exercise
let word = 'level';

const polidrom = (word) => {
    let wordArray = word.split('');
    let i = 0;
    let arrayLength = wordArray.length;
    while (i < arrayLength) {
        if (wordArray[i] !== wordArray[arrayLength - 1 - i]) {
            return false;
        }
        i++;
    }
    return true;
};

console.log(polidrom(word));

