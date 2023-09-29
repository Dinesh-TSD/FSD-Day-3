 //Practice https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373
 //Task 1
 //1.Declare four variables without assigning values and print them in console.
 a="";
 b="";
 c="";
 d="";

 console.log(a,b,c,d);

 //2.How to get value of the variable myvar as output.
 var myvar=1;
 console.log(myvar);

 //3.
 var first_name="Dinesh";
 var last_name="dhiney";  
 var marital_status="single";
 var country="india";
 var age=25;

//4.
var student=[first_name="Dinesh",last_name="dhiney",marital_status="single",country="india",age=25]
console.log(student)
//5.
var str = "I am dinesh";
var boolen = true;
var undefin = undefined;
var nul = null;

//6.

var age1 = "25";
var age2 = "30";

var myAge = parseInt(age1);
var yourAge = parseInt(age2);

var myAge1 = Number(age1);
var yourAge1 = Number(age2);

var myAge = +age1;
var yourAge = +age2;

//7.

/*
Truthy Values:

1.true - The boolean value true is a truthy value.
2."Hello, World!" - A non-empty string is a truthy value.
3.  42 - A non-zero number is a truthy value.
4.[] - An empty array is a truthy value.
5.{} - An empty object is a truthy value.
6.function() { } - An empty function is a truthy value.

Falsy Values:

1.false - The boolean value false is a falsy value.
2."" - An empty string is a falsy value.
3. 0 - The number zero is a falsy value.
4.null - The special value null is a falsy value.
5.undefined - The special value undefined is a falsy value.
6. NaN - The special value NaN (Not-a-Number) is a falsy value.*/


//Task2...
//1.Square of a number
function square(number) {
    return number * number;
  }
  
  const num = 5;
  const result = square(num);
  console.log(result);  

//2.Swapping 2 numbers
let af = 5;
let bf = 10;

let temp = a;
a = b;
b = temp;

console.log("a =", a);
console.log("b =", b);

//3.Addition of 3 numbers
 var a1 = 5;
 var b1 =4;
 var c1 =1;

 var add=a1+b1+c1;
 
 //4.Celsius to Fahrenheit conversion
 var celsius=20;
 var fahrenheit = (celsius * 9/5) + 32;
 console.log(fahrenheit);

//5.Meter to miles
  const meters= 1000;
  const milesDistance = meters*0.000621371;
  console.log(milesDistance);
  
//6.Pounds to kg
const pounds= 1000;
  const kg = pounds*0.000621371;
  console.log(kg);

//7.Calculate Batting Average
  const totalRuns = 500; 
  const totalInnings = 20;
 
  const average =  totalRuns / totalInnings;
  
  console.log(average);
//8.Calculate five test scores and print their average

const score1 = 95;
const score2 = 54;
const score3 = 78;
const score4 = 70;
const score5 = 84;

const sum = score1 + score2 + score3 + score4 + score5;

const averages = sum / 5; 
console.log(average);
