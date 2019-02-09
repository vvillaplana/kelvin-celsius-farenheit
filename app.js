//this is the temperature in kelvin
const kelvin = 200;
//This converts kelvin to celsius
const celsius = kelvin - 273;
//This converts celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//This rounds down the temperature in fahrenheit
fahrenheit = Math.floor(fahrenheit);

//This calculates and rounds down the temperature in newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

//Prints the temperatura in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Prints the temperatura in Newton
console.log(`The temperature is ${newton} degrees Newton.`);