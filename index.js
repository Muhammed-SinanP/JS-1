{// Create a program that asks the user for two numbers and prints their sum.
const number1 = Number(window.prompt("Enter a number"));
const number2 = Number(window.prompt("Enter another number"));
const sum = number1 + number2;
window.alert(`Sum is ${sum}`);
}

{
// Implement a program that calculates the area of a rectangle using given length and width.
const length = Number(window.prompt("Enter length in cm"));
const width = Number(window.prompt("Enter width in cm"));
const area = length * width;
window.alert(`Area of rectangle is ${area} cm²`);
}



{
// Create a program that asks the user for their age and
// determines if they are eligible to vote (considering a voting age of 18).
const voteAge = Number(window.prompt("Enter you age"));
if(voteAge>=18){
    window.alert("You are eligible to vote")
}
else{
    window.alert("You are not eligible to vote");
}
}


{
// Write a script that takes a user's grade as input and
// outputs whether they passed or failed (assuming the passing grade is 60 or above).
const mark = Number(window.prompt("Enter your mark"));
if(mark >= 60){
    window.alert("Passed");
}
else{
    window.alert("Failed");
}
}

{
// Implement a program that checks if a user's entered number is positive, negative, or zero.
const num = Number(window.prompt("Enter any number (it can be positive/negative/zero)"));
if(num === 0){
    window.alert("Entered number is zero");
}
else if(num > 0){
    window.alert("Entered number is positive");
}
else if(num < 0){
    window.alert("Entered number is negative");
}
}


{
// Write a script that takes a user's age and checks if they are a
// child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).
const age = Number(window.prompt("Enter your age"));
if(age>=0 && age<=12){
    window.alert("You are a child");
}
else if(age>=13 && age<=19){
    window.alert("You are a teenager");
}
else if(age>=20 && age<=59){
    window.alert("You are an adult");
}
else if(age>=60){
    window.alert("You are a senior person");
}
}



{
// find the square of each number in an array=[1,3,9,12,15,18,21] using loop
let array = [1,3,9,12,15,18,21];
window.alert(`Array before squaring: ${array}`)
for(i=0; i<7; i++){
    array[i] = array[i] * array[i];
}
window.alert(`Array after squaring: ${array}`);
}



{
// Write a program to find the sum of all the odd numbers for a given limit 
// (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )
const limit = Number(window.prompt("Enter a limit"));
let oddSum = 0;
for(let i=1; i<=limit; i++){
    if(i%2==1){
        oddSum = oddSum + i;
    }

}
window.alert(`the sum of all the odd numbers upto ${limit} is: ${oddSum}`)
}




            // js miscellaneousassignment


{
// 1.Create a right-angled triangle pattern with * characters.
// The height of the triangle should be based on a given number n.
// Example: for n = 5:
// *
// **
// ***
// ****
// *****
const height1 = Number(window.prompt("Enter a number to set height of the triangle1"));

for(let i=1; i<=height1; i++){
    for(let j=1; j<=i; j++){
        document.write("*");
    }
    document.write("<br>")
}
}

{
// // // 2. Create a pyramid pattern with * characters. 
// // The height of the pyramid should be based on a given number n.
// // // Example for n = 5:
// // //     *
// // //    ***
// // //   *****
// // //  *******
// // // *********

const h2 = Number(window.prompt("Enter a number to set height of the triangle2"));

for(let i = 1; i <= h2; i++){
    let row = "";
    for(let j = 1; j <= (2 * h2) - 1; j++){
        if(j >= h2 - (i - 1) && j <= h2 + (i - 1)){
            row += "*";
        }
        else{
            row += "_";
        }
    }
    document.write(row + "<br>");
}
}
