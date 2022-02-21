// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.
// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log? 5

//const colors = ["tangerine", "magenta", "lilac", "daffodil"]
 //console.log(colors.push("indigo"))

// a) Your answer: 5

// b) Verify and explain: while going through the examples with the teacher in class I thought it would log in 4 because I did not undestarnd really well the concept of lenghth and index. Lenghths counts at 1 and index start at 0. So, if I want to count how many things they are I would start count the elements with one, but if I was looking for where the elements live then my awnser would start counting in zero.


// --------------------1) What will this log? 10 

const cohort = "Alpha 2022"
 console.log(cohort.length)

// a) Your answer: 1
// b) Verify and explain: I thought the awnser would log in 1 because of the word "length" meaning that the index would not start at 0. For some reason my mind got confused as the number 1 would count for the entire word wrapped inside of the cottation instead of each element 


// --------------------2) What will this log? 0

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: O
// b) Verify and explain: It log in O because "greeting" call the number 4 in the array and since this is index it started counting at 0.


// --------------------3) What will this log? Ruby

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby 
// b) Verify and explain: Since index is like an address when it have brackets and a number inside it will retrieve a specific value. As the index was 1 and each element contains a value starting with 0. The index of 1 would be Ruby. 


// --------------------4) What will this log? it came back weekendDays.toUpperCase is not a function. 

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: I thought it was string methods argument and it would come back all the elements in upper case. This one I got a little confused why it came back as an error. 

// --------------------5) What will this log? number

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: "" - string - 
// b) Verify and explain: I guessed it would be a "" (string) because of the value, but because it has a lenght would come back "number". 

  