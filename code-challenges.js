// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

//output is "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

//output is "cherry"

//pseudo Code 
//create a function named longerString
//Input
//longerString is going to take two parameters: stringOne and stringTwo
//use conditional to check which string is longer
//if first string is longer than the second return string 
//else return the second string

//output
//return the string with more characters



// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

const anyGivenNumber = (num)=>{
    if(num ===212){ 
    return "212 is at boiling point"
    }
    else if(num >=350){
     return "350 is above boiling point"
    }
    else if(num <=42){
    return "42 is below boiling point"
    }
    }
    console.log (anyGivenNumber(temp1))
    console.log (anyGivenNumber(temp2))
    console.log (anyGivenNumber(temp3))




//pseudo code
//create a function invocation
//


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.length + myNumbers2.length)

// pseudo code 
//create a code 
//combine the two arrays
//use lenght property 
//output 10 
//take the function myNumbers1 and the fuction myNumbers2 
//use the command lenght after each function
//use the addition sign between both function
//return the number 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 Alpha"

const currentCohort = "Alpha 2022"
const result = reverseString(currentCohort);
console.log(result)

//pseudo code 
// create a code that will reverse letters
// build in method will be reverse a string 
//the reversed string element should have inside the function currentCohort
//output expected is 2202 Alpha


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

for(let i = 0; i < myArray.length; i++){
if(myArray[i] % 2 !==0){
    console.log("the number is odd");
} else { 
    console.log("the number is even");
}
}
//pseudo code
//create a statement in the array that will tell if the number is even or odd
//it shoulb be a for loop with conditional
//it should have index and should be counting one number at time
//the output "odd" "even" "odd" "even" "odd" "even"


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

//conditional statement