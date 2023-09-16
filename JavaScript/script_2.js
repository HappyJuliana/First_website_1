let weightSarah = Number;
let weightBob = Number;
let heightSarah = Number;
let heightBob = Number;

weightSarah = 65;
weightBob = 93;
heightSarah = 1.75;
heightBob = 1.89;

let sarahBMI = weightSarah / (heightSarah**2);
let bobBMI = weightBob / (heightBob**2);

console.log (sarahBMI);
console.log (bobBMI);

if (sarahBMI < 18.5) {
    console.log ("Sarah's underweight")
} else if (sarahBMI > 18.5 && sarahBMI < 25) {
    console.log ("Sarah's weight is normal")
}

if (bobBMI < 18.5 || bobBMI > 25) {
    console.log ("Bob is underweight or overweight")
} else {
    console.log ("Bob's weight is normal")
}