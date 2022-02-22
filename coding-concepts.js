// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.
// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log? 5

//const colors = ["tangerine", "magenta", "lilac", "daffodil"]
 //console.log(colors.push("indigo"))

// a) Your answer: 5

// b) Verify and explain: While going through the examples with the teacher in class I thought it would login 4 because I did not understand the concept of lenghth and index very well. Lenghths start counting at 1 and indexes start counting at 0. So, if I want to count how many things they are, I would start counting the elements with one, but if I was looking for where the elements live then my I would start counting at zero.


// --------------------1) What will this log? 10 

const cohort = "Alpha 2022"
 console.log(cohort.length)

// a) Your answer: 1
// b) Verify and explain: I thought the answer would login 1 because of the word "length" meaning that the index would not start at 0. For some reason I got confused and thought that the number 1 would count for the entire word wrapped inside of the quotation, instead of each element 


// --------------------2) What will this log? 0

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: O
// b) Verify and explain: It would login O because "greeting" called the number 4 in the array and, since this is index, it started counting at 0.


// --------------------3) What will this log? Ruby

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby 
// b) Verify and explain: Since an index is like an address when it has brackets and a number inside, it will retrieve a specific value. The index was 1 and each element containing a value starts with 0. The index of 1 would be Ruby. 


// --------------------4) What will this log? it came back weekendDays.toUpperCase is not a function. 

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: I thought it was a string methods argument and it would come back with all the elements in upper case. This one I got a little confused as to why it came back as an error. So I am not quite sure why it came back as an error.

// --------------------5) What will this log? number

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: "" - string - 
// b) Verify and explain: I guessed it would be a "" (string) because of the value, but because it has a length it came back "number". 


  