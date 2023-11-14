//Exercise 1
const string = "Today I went to the shop 123 and bought 4 bananas.";
const stringRegex = /\d+/g;
const numbersArray = string.match(stringRegex);
console.log(numbersArray);


//Exercise 2
const text = "City postal codes: 12345, 98765, 54321";
const textRegex = /\d{5}/g;

const codesArray = text.match(textRegex); //just to check which postal codes are found in the string
console.log(codesArray);

if (textRegex.test(text)) {
    console.log("Postal codes are correct");
} else {
    console.log("Postal codes are incorrect");
}


//Exercise 3
const films = `
        1 The Shawshank Redemption (1994)
        2 The Godfather (1972)
        3 The Godfather: Part II (1974)
        4 Pulp Fiction (1994)
        5 The Good, the Bad and the Ugly (1966)
        6 The Dark Knight (2008)
        7 12 Angry Men (1957)
        8 Schindler's List (1993)
        9 The Lord of the Rings: The Return of the King (2003)
        10 Fight Club (1999)
        `;
const filmsRegex = /\d+ [\w\s':,]+ \((199[1-9]|20\d{2})\)/g;
const filmsArray = films.match(filmsRegex);
console.log(filmsArray);


//Exercise 4
const colors = `
        AliceBlue #F0F8FF
        AntiqueWhite #FAEBD7
        Aqua #00FFFF
        Aquamarine #7FFFD4
        Azure #F0FFFF
        12 bit:
        White #FFF
        Red #F00
        Green #0F0
        Blue #00F
        `;
const colorsRegex = /#+[A-Fa-f0-9]{6}\b/g;
const colorsArray = colors.match(colorsRegex);
console.log(colorsArray);