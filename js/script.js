"use strict";

let number = 5;

const leftBorderWidth = 1;

let userName = "John";
let userNumber = 25;

userNumber = 24;

const obj = {
    name: 'Andy',
    name2: 'Andy2'
};


let storeName = 'Zabka';

let storeDescription = {
    budget: 10000,
    employees: ['Sebastian', 'Natalia', 'Wladyslaw'],
    products: {
        product1: 10,
        product2: 15,
    },
    open: true
};



// alert('Hello');

// const re12sult = confirm("Are you still here?");
// console.log(result);
// alert(result);

// const answer = +prompt("Are you 18?", "18");

// alert(typeof(answer) + ' -' + answer+5);
// alert(answer+5);

const answers = [];

answers[0] = prompt("What is your name?, ''");
answers[1] = prompt("What is your surname?, ''");
answers[2] = +prompt("How old are you?, ''");

alert(answers);

// document.write(answers);


const category  = 'toys';

console.log('https://someurl.com/' + category + '/5');
console.log(`https://someurl.com/${category}/5`);

alert(`Hi, ${userName}`);

console.log(5 === '5'); // false юо превіряє тип з типом і вміст з вмістом
console.log(5 == '5'); // true юо превіряє тільки вміст 


// && and
// || or

console.log(2+2*2 == 6);
