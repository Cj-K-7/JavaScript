//Use Recursion to Create a Range of Numbers

/* 조건 : 
Your function should return an array.

Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).

rangeOfNumbers should use recursion (call itself) to solve this challenge.

rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].

rangeOfNumbers(6, 9) should return [6, 7, 8, 9].

rangeOfNumbers(4, 4) should return [4]. */

function rangeOfNumbers(startNumber, endNumber) {
  if (endNumber <= startNumber) {
    return [startNumber]; //BASE CASE : this is initial value
  } else {
    const array = rangeOfNumbers(startNumber, endNumber - 1); //RECURSION : call itself
    array.push(endNumber);
    return array;
  }
}

const x=1;
const y=12;
console.log(`Recursion :\n range number : (startNumber: \"${x}\" , endNumber: \"${y}\") will return : \n ${rangeOfNumbers(x,y)}`);
