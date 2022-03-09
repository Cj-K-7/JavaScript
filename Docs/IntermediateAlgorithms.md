# Intermediate Algorithms

FreeCodeCamp 알고리즘 문제의 제 풀이입니다.

## 1. Sum All Numbers in a Range  
Return the sum of Array's two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

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

풀이 : 두 숫자를 최대 , 최소값으로 반복문 조건에 넣어서 두 수 사이 차이가 없어질때 까지 반복문으로 + 하여 모든 숫자를 더하기.

<br>

## 2. Diff Two Arrays 
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

    test case  
    
    1. ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
    
    2. [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
    
    3. [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

<br>

```javascript
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(a=> !arr1.includes(a)| !arr2.includes(a))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
```


풀이 : 두 배열을 하나로 합친 뒤에, 합쳐지기 전 두 배열에 포함이 "안되어 있는 조건"을 "or" 로 걸면 두 배열 중에서 한 곳이라도 해당 값이 포합되지 않을 경우 그 값을 반환합니다.

<br>

## 3. Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

 #arguments 객체 :  함수에 전달된 인수에 해당하는 Array 형태의 객체입니다.

     test case  
    
    1. destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

    2. destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

    3. destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
    
<br>

```javascript
function destroyer(arr, ...args) {
  return arr.filter(a=> !args.includes(a));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1,1]
```

풀이 : arguments 객체 사용을 권하지만, ...args 을 이용해 2번째 인자 부터는 모두 array 내에 있는 인자로 취급해서 includes 를 이용해 filter 함수의 조건을 만들어 적용. 

<br>

## 4. Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

     test case  
    
    1. whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

    2. whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

    3. whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []

<br>

```javascript
function whatIsInAName(collection, source) {
  const keys = Object.keys(source)
  return collection.filter(a=> keys.every(key=>a.hasOwnProperty(key) && source[key]===a[key]))
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // [{ first: "Tybalt", last: "Capulet" }]
```

풀이 : Object의 keys 메소드를 통해 조건(source) 에 있는 오브젝트 해당 키(key)가 존재하는지 확인하는 동시에, 해당 키의 값을 같이 비교해 같은 key와 value 한쌍이 존재하는지를 filtering.

순서가 중요.

<br>

## 5. Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

     test case  
    
    1. spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

    2. spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

    3. spinalCase("AllThe-small Things") should return the string all-the-small-things.

<br>

```javascript
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');//this-is-spinal-tap
```

풀이  : 정규표현식 필수...

<br>

## 6. Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

     test case  
    
    1. translatePigLatin("paragraphs") should return the string aragraphspay.

    2. translatePigLatin("glove") should return the string oveglay.

    3. translatePigLatin("algorithm") should return the string algorithmway.

<br>

```javascript
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonant = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonant.length) + consonantCluster + "ay";
} //consonant => onsonantcay
```

풀이  : 단어의 앞에오는 자음을 뒤로 붙이는 작업에서 Substring 을 활용하면 편하지만 이것도 정규표현식 필수입니다.

<br>

## 7. Search and Replace

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

     test case  
    
    1. myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

    2. myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.

    3. myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

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

풀이  : 단순하게는 string 을 replace 하면 되지만, before 단어의 시작이 대문자이면 after도 대문자이게 해야합니다. 정규표현식으로 before 의 첫글자에 따라 조건문을 걸고, after 인자의 첫번째 글자만 대문자로 바꿔주는 작업을 진행합니다. 정규표현식 활용한 알고리즘이 많네요.
<br>

## 8. DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

      test case

    1. pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

    2. pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

    3. pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

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

풀이 : str 을 split() 을 이용해서 배열로 변한한 뒤에, map을 이용해 각 element의 짝을 찾아 2depth 배열로 반환해줍니다.

<br>

## 7. Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

     test case  
    
    1. fearNotLetter("abce") should return the string d.

    2. fearNotLetter("abcdefghjklmno") should return the string i.

    3. fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

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

풀이  : 단순하게는 string 을 replace 하면 되지만, before 단어의 시작이 대문자이면 after도 대문자이게 해야합니다. 정규표현식으로 before 의 첫글자에 따라 조건문을 걸고, after 인자의 첫번째 글자만 대문자로 바꿔주는 작업을 진행합니다. 정규표현식 활용한 알고리즘이 많네요.
<br>