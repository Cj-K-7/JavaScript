# Intermediate Algorithms

<br>
## FreeCodeCamp 알고리즘 문제 풀이입니다.
문제와 지시 사항, 테스트 케이스는 원문 그대로 사용합니다.

<br>
<br>

# 1. Sum All Numbers in a Range  
<br>
Return the sum of Array's two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


<br>
<br>

```javascript
function sumAll(arr) {
    let result = 0;
    for(let i=Math.min(...arr); i <= Math.max(...arr); i++){
       result += i;
    }
    return result;
}

sumAll([1,4]); // 10
```

<br>

풀이 : 두 숫자를 최대 , 최소값으로 반복문 조건에 넣어서 두 수 사이 차이가 없어질때 까지 반복문으로 + 하여 모든 숫자를 더하기.

<br>
<br>
<br>

# 2. Diff Two Arrays 
<br>
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

    test case  
    
    1. ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
    
    2. [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
    
    3. [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].


<br>
<br>

```javascript
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(a=> !arr1.includes(a)| !arr2.includes(a))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
```

<br>


풀이 : 두 배열을 하나로 합친 뒤에, 합쳐지기 전 두 배열에 포함이 "안되어 있는 조건"을 "or" 로 걸면 두 배열 중에서 한 곳이라도 해당 값이 포합되지 않을 경우 그 값을 반환합니다.

<br>
<br>
<br>

# 3. Seek and Destroy
<br>

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

 #arguments 객체 :  함수에 전달된 인수에 해당하는 Array 형태의 객체입니다.

     test case  
    
    1. destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

    2. destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

    3. destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
    

<br>
<br>

```javascript
function destroyer(arr, ...args) {
  return arr.filter(a=> !args.includes(a));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1,1]
```

<br>

풀이 : 풀고 난 뒤에  문제에서는 arguments 객체 사용을 권하지만, ...args 을 이용해 2번째 인자 부터는 모두 array 내에 있는 인자로 취급해서 includes 를 이용해 filter 함수의 조건을 만들어 적용해주었습니다. 

<br>
<br>
<br>

# 4. Wherefore art thou
<br>

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

     test case  
    
    1. whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

    2. whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

    3. whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []


<br>
<br>

```javascript
function whatIsInAName(collection, source) {
  const keys = Object.keys(source)
  return collection.filter(a=> keys.every(key=>a.hasOwnProperty(key) && source[key]===a[key]))
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // [{ first: "Tybalt", last: "Capulet" }]
```

<br>

풀이 : Object의 keys 메소드를 통해 조건(source) 에 있는 오브젝트 해당 키(key)가 존재하는지 확인하는 동시에, 해당 키의 값을 같이 비교해 같은 key와 value 한쌍이 존재하는지를 filtering.

순서가 중요합니다. 쉽게 생각하면 array를 주고 특정 키/값 쌍을 제공해주는 것이 조건이고,
우리는 받은 그 키/값의 쌍에서 key를 가지고와서 현재 있는 array내에 요소들이 해당 키값을 비교하는 조건을 만들어 주시면, 그 뒤는 filter가 알아서 해주는 것이죠.

<br>
<br>
<br>

# 5. Spinal Tap Case
<br>

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

     test case  
    
    1. spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

    2. spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

    3. spinalCase("AllThe-small Things") should return the string all-the-small-things.


<br>
<br>

```javascript
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');//this-is-spinal-tap
```

<br>

풀이  : 정규표현식 필수...

<br>
<br>
<br>

# 6. Pig Latin
<br>

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

     test case  
    
    1. translatePigLatin("paragraphs") should return the string aragraphspay.

    2. translatePigLatin("glove") should return the string oveglay.

    3. Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.


<br>
<br>

```javascript
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonant = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonant.length) + consonant + "ay";
} //consonant => onsonantcay
```

<br>

풀이  : 단어의 앞에오는 자음을 뒤로 붙이는 작업에서 Substring 을 활용하면 편하지만 이것도 정규표현식 필수입니다.

설명하자면, 주어진 string 의 맨 앞이 자음들로 이루어 진다면 , 자음들은 맨뒤로 보내서 모음으로 시작하게 하고,  거기에 ay로 끝나게끔 하는 것하나와, 이미 모음으로 시작한다면 way를 추가하는 것입니다.

사실 조건이 2개라 어려운 것은 없고, 앞에 "자음들"을 가져와야 하는 것이 더 관건인듯 합니다.

<br>
<br>
<br>

# 7. Search and Replace
<br>

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

     test case  
    
    1. myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

    2. myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.

    3. myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.


<br>
<br>

```javascript
function myReplace(str, before, after) {
  let a;
  const af = after.split("");
  if(/^[A-Z]/.test(before)){
    af.splice(0, 1, af[0].toUpperCase());
    a = af.join("");
  } else {
    a = after.replace(after, after.toLowerCase())
  }

  return str.replace(before, a);
} //consonant => onsonantcay
```

<br>

풀이  : 단순하게는 string 을 replace 하면 되지만, before 단어의 시작이 대문자이면 after도 대문자이게 해야합니다. 정규표현식으로 before 의 첫글자에 따라 조건문을 걸고, after 인자의 첫번째 글자만 대문자로 바꿔주는 작업을 진행합니다. 정규표현식 활용한 알고리즘이 많네요.

RegExp.text() 를 통해 boolean 값을 생성해서 조건을 만들어 주시고, 정규표현식에서 대문자와 소문자를 표현한 조건 아래에서 대문자와 소문자를 정해주면 됩니다.
<br>
<br>
<br>

# 8. DNA Pairing
<br>

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

      test case

    1. pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

    2. pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

    3. pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].


<br>
<br>

```javascript
function pairElement(str) {
    return  str.split("").map(a=>{ 
    let pair;
    switch(a){
     case "A" : pair = "T"
     break;
     case "T" : pair = "A"
     break;
     case "C" : pair = "G"
     break;
     case "G" : pair = "C"
     break;
    }
    return [ a , pair ]

  })
}

pairElement("GCG"); //[["G", "C"], ["C","G"], ["G", "C"]]
```

<br>

풀이 : str 을 split() 을 이용해서 배열로 변한한 뒤에, map을 이용해 각 element의 짝을 찾아 2depth 배열로 반환해줍니다. 

알고리즘 공부를 하면서 가끔 문제는 맞았지만 점수가 안나오거나, 결과는 나오는데 경고문이 뜹니다(무한 루프등등..) 
iteration 반복문 / swith & case 문 / if 조건문 / 삼항연산자 사용을 적재적소에 사용하는 방법을 미리 익히는 것이 생각보다 중요합니다.

<br>
<br>
<br>

# 7. Missing letters
<br>

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

     test case  
    
    1. fearNotLetter("abce") should return the string d.

    2. fearNotLetter("abcdefghjklmno") should return the string i.

    3. fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.


<br>
<br>

```javascript
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}
```

<br>

풀이  : charCodeAt() 에 대해서 MDN문서 를 보고 몇번 테스트한뒤 적용했습니다만, 아직도 잘 이해가 안되네요. 유니코드에 대해서 찾아보면 도움이 될 것 같습니다.
<br>
<br>
<br>


# 8. Sorted Union
<br>

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

     test case  
    
    1. uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

    2. uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

    3. uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].


<br>
<br>

```javascript
function uniteUnique(...arrs) {
  return arrs.reduce((a, c) => {
    const result = a
      .reduce((acc, current) => {
        const length = acc.length;
        if (length === 0 || !acc.includes(current)) { acc.push(current); }
        return acc
      }, [])
      .concat(c.filter((e) => !a.includes(e)))
    return result;
  });
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

<br>

풀이  : reduce 지옥입니다. 제가 푼 풀이는 성능이 안좋을 것 같아보입니다.
쉽게 풀이하자면.
  배열들을 요소로 가지는 배열에서 reduce 를 통해 매 배열(2차배열들)마다 그 이전 배열의 숫자들이 includes되어 있는지 확인 후에 필터링으로 (false) 경우만 모아서 concat을 실행하구요. 한번 실행될때마다 accumulator에 중복값을 없애는 reduce를 또 만듭니다...

  이렇게되면 순서는

  받은 배열들의 맨앞 배열의 중복값을 없애고, 다음 배열과 중복되지 않는 값을 합칩니다.
  이것을 반복해서 순서는 그대로인 중복없는 배열을 만듭니다.
<br>
<br>
<br>

# 9. Convert HTML Entities
<br>

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entiti

     test case  
    
    1. convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

    2. convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

    3. convertHTML("<>") should return the string &lt;&gt;.


<br>
<br>

```javascript
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

convertHTML("Dolce & Gabbana"); //" Dolce &amp; Gabbana"
```

<br>

풀이  : 너무 어렵게 생각해도 잘 안풀리는 문제입니다. parseInt() 같이 편리한 method()가 있으면 좋겠죠. 그걸 만드는거라 생각하셔야합니다 ㅎㅎ. 정규표현식이 필요합니다!  

조금 더 깊게 들어가면 object를 사용할지, switch/case 문을 사용할지 선택적인 듯 합니다.
이게 나중에 hashtable 사용에 대한 시간복잡도나 성능 문제까지 공부하는 부분과 겹치는 개념인듯 한데, 결국 얼마만큼의 크기에 어떤 구조나 알고리즘을 사용하냐가 영향을 주는 편이라서

결국 또 다시 공부입니다.

<br>
<br>
<br>

# 10. Sum All Odd Fibonacci Numbers
<br>

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

     test case  
    
    1. sumFibs(1) should return a number.

    2. sumFibs(4000000) should return 4613732.

    3. sumFibs(1000) should return 1785.


<br>
<br>

```javascript
function sumFibs(num) {
let pre = 0
let cur = 1;
let result = 0;
while(cur <= num){
  if(cur%2 === 1){
    result +=cur
  }
    cur += pre;
    pre = cur-pre;
}
return result;
}

sumFibs(4); // 5
```

<br>

풀이  : 피보나치 수열 그리고, 짝수와 홀수 구분 로직을 짜서 구현합니다.  
반복문 쓸때, 사실 접근하실때 , 1, 1로 시작하는 수열에서 바로 앞 두항의 합을 추가하는 무한대의 수열을 생각하기 때문에, 처음 접근에서 잘못 들어가면 헤매이실 겁니다.

그리고 순서가 중요합니다 . 반복문 내에서 pre와 cur 값 할당을 하는 순서를 보시면 좋겠네요.

저는 그랬구요. 컴퓨터 공학에서는 0부터 시작하는 것에 좀 익숙해지는게 좋을 것같네요!(배열도 index도 0부터니...)

<br>
<br>
<br>

# 11. Sum All Primes
<br>

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

     test case  
    
    1. sumPrimes(10) should return a number.

    2. sumPrimes(10) should return 17.

    3. sumPrimes(977) should return 73156.


<br>
<br>

```javascript
function sumPrimes(num) {
let result=0;
let con =0;
for(let i=1 ; i<=num; i++){
    for(let j=1; j<=i; j++){
    if(i%j===0){con += j}
    }
        if(con === i+1){
    result += i;
}  
con=0;
}
  return result;
}

sumPrimes(10);
```

<br>

풀이  : 소수 다루기 입니다. 조건이 꼬여서 정리하기 힘드실 수 있습니다.

이럴때는 우선순위를 정하는게 좋습니다.
우선 소수를 계산하는 알고리즘에 + 주어진 인자 num 보다 작은 소수들로만 더하는 구조입니다.
제가 접근한 방식은  '소수만' 구하기는 로직을 한번에 내기는 힘들고, 나누기 후 나머지를 표현하는 % 오퍼레이터를 활용해서 반복문을 통해 나머지가 0이되는 수들을 걸러내는데요., 즉 주어진 number 의 약수들을 모두 더 했을때 , 소수라면 자신과 1뿐이기 때문에 약수들의 합이 주어진 number+1 이 되는 것을 이용해 소수를 얻어내는 방법입니다.

결과는 모든 소수의 합이기 때문에 소수들을 나열할 필요는 없어서 arr를 사용하지 않았습니다.

<br>
<br>
<br>

# 12. Smallest Common Multiple
<br>

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

     test case  
    
    1. smallestCommons([1, 5]) should return 60.

    2. smallestCommons([1, 13]) should return 360360.

    3. smallestCommons([23, 18]) should return 6056820.


<br>
<br>

```javascript
function smallestCommons(arr) {
  let [min, max] = arr.sort((a,b)=>a - b);
  let numbers = [];
  for (min; min <= max; min++){
numbers.push(min)
  }

let time = 1;
for(let i=1;  !numbers.every(number=> (max*i)%number ===0 ) ; i++ ){
  time = i+1;
}

  return max*time;
}

smallestCommons([1,5]);
```

<br>

풀이  : 주어진 최대값과 최소값으로 이루어진 arr 로 , 최소 공배수를 구하는 문제입니다.
어려운게 분명 아닌데??? 하고 그냥 풀어서 진행해보면 꾀나 수학시간에 손으로 푸는 것보다는 어려웠습니다. 

우선 ES6 로 destructuring 문법을 통해 최대값과 최소값을 sort()된 인자값에서 추출해주시고(함수내 첫번째 선언)
최대부터 최소값까지를 나열한 arr 하나를 생성해서 every() 메소드를 통해 반복문 조건을 만들었습니다. 그 조건은 

 최대값의 공배수들 반복시키게끔 하는 것이지요. 그 공배수를 만들어 놓은 array의 every()를 통해 모두가 만족하는 나머지 0, 즉 처음 주어진 최대 최소값 사이 모든 수들의 공배수 중 첫번째로 나머지가 0인 공배수가 나옵니다. 다시 말하면 최소 공배수이죠.

  이렇게 쓰고나니 JS의 기본 Array.prototype 들이 가지는 기능 이해가 높아야만 하는 것 같습니다..



<br>
<br>
<br>

# 13. Drop it
<br>

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

     test case  
    
    1. dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

    2. dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

    3. dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].


<br>
<br>

```javascript
function dropElements(arr, func) {
  let leng = arr.length;
  for (let i = 0; i < leng; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
```

<br>

풀이  : 쉽게 생각하면 필터링같은데 사실은, 배열을 순차적으로 반복하면서 주어진 조건이 참이 되면 멈추는 반복문을 만드는 문제입니다.

다른 풀이들 중에 Slice와 findIndex 문법에 따라 조건의 참인 첫번째 index 를 findIndex로 찾고, Slice를 통해 해당 인덱스 앞을 다 짤라버리는 방법이 있습니다. findIndex도 조건을 만족하면 멈추는 iteration 이라는 점을 인지하면 좋겠네요


<br>
<br>
<br>

# 14. Steamroller
<br>

Flatten a nested array. You must account for varying levels of nesting.

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

     test case  
    
    1. steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

    2. steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

    3. steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].


<br>
<br>

```javascript
function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",")
    .split(",")
    .map(function(a) {
      if (a == "[object Object]") {
        return {};
      } else if (isNaN(a)) {
        return a;
      } else {
        return parseInt(a);
      }
    });
}
steamrollArray([1, [2], [3, [[4]]]]);
```

<br>

풀이  : 수동으로 Flat() 함수를 만드는 방법?이라 생각해야합니다. 조건이 flat()/ flatMap()을 못쓰는 상황이여서. 단순하게 접근하면 

처음에는 join 으로 string 으로 만들어 버린 후에, 빈칸을 없애는 과정과 / {} 가 [object Object]로 나타나기 떄문에 이를 다시 {}로 표현하는 과정을 추가해서 진행하면됩니다.

다만 풀이에서 엄청나게 간단하게 만드는 방법이 recursive function 을 쓰는 겁니다.
재귀함수라고 표현하죠. 


```javascript
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
```

엄청 간단해집니다. recursion 에 대해 영문 내용을 정리한 md파일이 있습니다.

단순 iteration(반복) 함수가 성능적으로는 빠르다고 합니다. 

재밌는 표현이 있습니다.

Iteration: "repeat something until it's done."
Recursion: "Solve a large problem by breaking it up into smaller and smaller pieces until you can solve it; combine the results."

데이터 구조나, 풀어야할 문제에 따라 차이점을 이해하고 사용하는 것에 익숙해져야 하겠네요.

<br>
<br>
<br>

# 13. Binary Agents
<br>

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

     test case  
    
    1. binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?

    2. binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!

<br>
<br>

```javascript
function binaryAgent(str) {
  const decimals= str.split(" ").map(a=>
  parsInt(a,2)
)
 return decimals.map(decimal=> String.fromCharCode(decimal)).join("").replace(",","");
 }

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

<br>

풀이  : 2진법(binary)을 10진법(decimal)으로 그리고 10진법 수를 CharCode 로 변형하는 문제입니다.

parseInt가 가지는 parameter 들을 이해하고 있으면 쉽습니다.

근데 저는 처음에 2진법을 10진법으로 직접 바꾸려고 코딩했어서 다음과 같은 것도 만들어는 봤습니다..

```javascript
  const decimals= str.split(" ").map(a=>
    a.split("").reduce(
      (acc, cur, i) =>
      acc+(2**(a.length-(1+i))*cur),0
    ))
```
도전해보세요 !

<br>
<br>
<br>
