//First Exercise
const studentGrades = [
    { name: "Anna", note: 9 },
    { name: "Denis", note: 7 },
    { name: "Cristian", note: 8 },
    { name: "Daniel", note: 6 },
    { name: "Elena", note: 10 }
  ];

  const totalGrades = studentGrades.reduce((acc, student) => {
    return acc + student.note;      
  }, 0);
  const averageGrade = totalGrades / studentGrades.length; 

  console.log('The average grade is: ' + averageGrade);


//Second Exercise
const products = [
    {name: "Tshirt", price: 50, isAvailable: true },
    {name: "Pants", price: 80, isAvailable: false },
    {name: "Jacket", price: 120, isAvailable: true },
    {name: "Shirt", price: 60, isAvailable: true },
    {name: "Skirt", price: 40, isAvailable: false }
  ];

  const availableProducts = products.filter((product) => product.isAvailable === true);
  const productNames = availableProducts.map(element => element.name);

  console.log('Available products are: ' + productNames);  


//Third Exercise 
const numbers = [10, 5, 8, 15, 3, 20];

const maxValue = numbers.reduce((accumulator, currentValue) => {
    if (currentValue > accumulator) {
        accumulator = currentValue
    } return accumulator;    
}, -Infinity);

console.log('The biggest number in the array is: '+ maxValue);


//Fourth Exercise
const students = [
    {John: [8, 7, 9]}, 
    {Mary: [9, 9, 10]}, 
    {Alex: [6, 8, 7]}
];

    const studentAverages = students.reduce((acc, student) => {
    let name = Object.keys(student)[0];
    let grades = student[name];    
    const sum = grades.reduce((acc, score) => {
        return acc + score;
     }, 0); 
    let average = sum / grades.length;
    acc[name] = average;
    return acc;
  }, {});
  
  console.log(studentAverages);