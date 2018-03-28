/*Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
 */

function numStrore(number) {
  var half = halfNumber(number);
  var square = squareNumber(half);
  var areaofC = areaOfCircle(square);
  var whatPerc = percentOf(areaofC);
}

function squareNumber(num) {
  console.log(
    `The result of squaring the number ${num} is ${num * num}`,
    num * num
  );
  return num * num;
}

function halfNumber(num) {
  consol.log(`half of  ${num} is ${num / 2} `, num / 2);
}
function percentOf(A, B) {
  console.log(`${A} is ${A / B * 100}% of ${B}`);
  return A / B * 100;
}
function areaOfCircle(radius) {
  console.log(
    `The area for a circle with radius ${radius}is ${(
      2 *
      Math.PI *
      radius
    ).toFixed(2)}`
  );
  return (2 * Math.PI * radius).toFixed(2);
}

// get all the id-s

// addEventListener to all of them
/*
NodeList.prototype.forEach = Array.prototype.forEach; 
HTMLCollection.prototype.forEach = Array.prototype.forEach;
*/

//get the display
document.getElementById("display");

[...document.querySelectorAll("button")].forEach(function(index) {
  $(index).click(function(e) {
    var firedButton = e.target.innerHTML;
    console.log(firedButton);
    display.innerHTML += firedButton;
  });
});

// Array.from(querySelectorAll('button')).forEach(function(index){
// $('button').click(function(e){
//   console.log('mivaan');
// }
// )})
