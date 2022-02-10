//reverse string 
let string = "I am IronMan";

string.split("").reverse().join("");

//Factorial
function factorialize_recursion(n) {
    if(n <= 0){
      return 1;
    } else {
      return n*factorialize(n - 1);
    }
  }

function factorialize_iteration(num) {
let product = 1;
for (let i = 1; i <= num; i++) {
    product *= i;
}
return product;
}

//Find the Longest Word in a String
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }