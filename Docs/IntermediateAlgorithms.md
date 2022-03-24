# Intermediate Algorithms

FreeCodeCamp 알고리즘 문제의 제 풀이입니다.

## 1. Sum All Numbers in a Range  
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

## 2. Diff Two Arrays 
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

## 3. Seek and Destroy
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

풀이 : arguments 객체 사용을 권하지만, ...args 을 이용해 2번째 인자 부터는 모두 array 내에 있는 인자로 취급해서 includes 를 이용해 filter 함수의 조건을 만들어 적용. 

<br>
<br>
<br>

## 4. Wherefore art thou
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

순서가 중요.

<br>
<br>
<br>

## 5. Spinal Tap Case
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

## 6. Pig Latin
<br>

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

     test case  
    
    1. translatePigLatin("paragraphs") should return the string aragraphspay.

    2. translatePigLatin("glove") should return the string oveglay.

    3. translatePigLatin("algorithm") should return the string algorithmway.


<br>
<br>

```javascript
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonant = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonant.length) + consonantCluster + "ay";
} //consonant => onsonantcay
```

<br>

풀이  : 단어의 앞에오는 자음을 뒤로 붙이는 작업에서 Substring 을 활용하면 편하지만 이것도 정규표현식 필수입니다.

<br>
<br>
<br>

## 7. Search and Replace
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
<br>
<br>
<br>

## 8. DNA Pairing
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

<br>
<br>
<br>

## 7. Missing letters
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


## 8. Sorted Union
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
  배열들을 요소로 가지는 배열에서 reduce 를 통해 매 배열(2차배열들)마다 그 이전 배열의 숫자들이 includes되어 있는지 확인 후에 필터링으로 아닌(false) 경우만 모아서 concat을 실행하구요. 한번 실행될때마다 accumulator에 중복값을 없애는 reduce를 또 만듭니다...
<br>
<br>
<br>

## 9. Convert HTML Entities
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

풀이  : 너무 어렵게 생각해도 잘 안풀리는 문제입니다. parseInt() 같이 편리한 method()가 있으면 좋겠죠. 그걸 만드는거라 생각합니다. 정규표현식이 필요합니다!  

<br>
<br>
<br>

## 10. Sum All Odd Fibonacci Numbers
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

저는 그랬구요. 컴퓨터 공학에서는 0부터 시작하는 것에 좀 익숙해지는게 좋을 것같네요!(배열도 0부터니...)

<br>
<br>
<br>

## 11. Sum All Primes
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
