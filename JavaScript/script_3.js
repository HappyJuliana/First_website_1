/*Ternary Operator*/
/*First Exercise*/
let number = 5;
let isNumber = (number % 2 === 0) ? "Even Number" : "Odd Number";
console.log (isNumber);

/*Second Exercise*/
let isLoggedIn = true;
let verification = isLoggedIn === true ? "User is authenticated" : "User is not authenticated";
console.log (verification);

/*Third Exercise*/
let price = 25;
let quantity = 10;
let isProduct = true;
let result = isProduct === true ? ("The price of all products is " + price*quantity + "$") : "Оut of stock";
console.log (result);

/*Fourth Exercise*/
let currentYear = new Date().getFullYear();
let isYear = (currentYear % 4 === 0) ? "Leap Year" : "Not Leap Year";
console.log (isYear);


/*Switch Statement*/
/*First Exercise*/
const countryName = 'MD';
switch (countryName) {
    case 'MD':
        console.log("Republic of Moldova");
        break;
    case 'USA':
        console.log("United States of America");
        break;
    case 'UK':
        console.log("United Kingdom of Great Britain ...");
        break;
    case 'BG':
        console.log("Bulgaria");
        break;
    case 'RO':
        console.log("Romania");
        break;
    case 'RU':
        console.log("Russia");
        break;
    default:
        console.log('Not a valid code of country');
}

/*Second Exercise*/
const score = 95;
let grade;
switch (true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    case score >=70:
        grade = 'C';
        break;
    case score >= 60:
        grade = 'D'; 
        break;
    default:
        grade = 'F'; 
}
console.log("Your grade is " + grade);


/*Function Exercises*/
/*First Exercise*/
function tellFortune (n, z, y, x) {
    console.log(`You will be ${x} in ${y}, and will get married to ${z} with ${n} kids.`);
}
tellFortune (3, 'John', 'California', 'accountant');
tellFortune (2, 'Jacob', 'Miami', 'artist');
tellFortune (4, 'Mary', 'Siberia', 'baker');

/*Second Exercise*/
function calculatedDogAge (x) {
    let dogAge = x*7;
    console.log(`Your dog is ${dogAge} years old in dog years!`)
}
calculatedDogAge (3);
calculatedDogAge (5);
calculatedDogAge (8);

/*Third Exercise*/
const calculationSupply = (currentAge, foodPerDay, maxYears=100) => {
    let agesLeft = maxYears - currentAge;
    let foodQuantity = agesLeft*(foodPerDay*365);
    console.log(`You will need ${foodQuantity} kg of food to last you until you are very old - ${maxYears} years old`);    
}
calculationSupply (4, 0.5);
calculationSupply (25, 2);
calculationSupply (59, 3.5);


