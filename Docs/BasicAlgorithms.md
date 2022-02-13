# **Basic Algorithms in JAVASCRIPT**

아래에 Free Code Camp 에서 나온 기본 알고리즘 문제들에 대한 풀이입니다.
단순한 내용은 풀이 해석을 하지 않았습니다.

1. [Reverse string](#reverse-string)
2. [Factorial](#factorial)
3. [Find the Longest Word in a Sentence](#find-the-longest-word-in-a-sentence)
4. [Repeat String without repeat()](#repeat-string-without-repeat)
5. [Truncate a String](#truncate-a-string)
6. [Title Case a Sentence](#title-case-a-sentence)
7. [Slice and Splice](#slice-and-splice)
8. [Falsy Bouncer](#falsy-bouncer)
9. [Where do I Belong](#where-do-i-belong)
10. [Mutations](#mutations)
11. [Chunky Monkey](#chunky-monkey)  

<br/>
<hr/>
<br/>

## **Reverse string**  
String 뒤집기 

<br/>

```javascript
let string = "naMnorI ma I";

string.split("").reverse().join("");
```
<br/>

    'I am IronMan'

<br/><hr/><br/>

## **Factorial**

 n! = 1 × 2 × 3 × ... × n

- Recursion

```javascript
function Factorialize(n) {
  if (n <= 0) {
    return 1;
  } else {
    return n * factorialize(n - 1);
  }
}
```
- Iteration

```javascript
function Factorialize(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;    //result = result * i;
  }
  return result;
}
```

<br/><hr/><br/>

## **Find the Longest Word in a Sentence**
  
주어진 문장에서 가장 긴 단어 찾기  
<br/>

```javascript
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}
```

<br/><hr/><br/>

## **Repeat String without repeat()**

repeat() 함수 없이 num만큼 string 반복하기  
<br/>
```javascript
function repeatStringNumTimes(str, num) {
  let result = [];
  let arr = str.split("");
  for (let i = 0; i < num; i++) {
    result.push(...arr);
  }
  return result.join("");
}
```

<br/><hr/><br/>

## **Truncate a String**
 num 이상 길이의 string 생략하기 (...으로 끝내기)

원문 :  
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).  

 Return the truncated string with a ... ending.

<br/>

```javascript
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  } else {
    return str.substring(0, num) + "...";
  }
}
```

<br/><hr/><br/>

## **Title Case a Sentence**
모든 단어의 첫 번째 글자는 대문자로. 나머지 글자는 소문자로

원문 :  
 return All fist letter of each word capitalized.!
 but Make sure the rest of the owrd is lower case.



```javascript
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((w) => w.replace(w.split("")[0], w.split("")[0].toUpperCase()))
    .join(" ");
}
```

풀이 :  
 string 을 대문자/소문자로 만들어주는 toUpperCase/toLowerCase 는 MDN 참고.

 먼저 전체 소문자로 변경한 뒤에 띄어쓰기마다 첫 글자가 오기 때문에 " " 이렇게 띄어쓰기 (" "와 ""는 전혀 다릅니다)를 이용해 각 단어들을 잘라 Array로 변경해줍니다.   
  **= split(" ")**

 그 뒤에 map(: Iteration)을 통해 잘라진 단어들(string)로 이뤄진 Array의 매 element를 또 split을 통해 각 글자로 나눠주게 됩니다.  
  
 그리고 해당 글자들로 이루어진 Array의 첫 글자 : [0] index 값만 대문자로 변경합니다.  
  **=map((w) => w.replace(w.split("")[0], w.split("")[0].toUpperCase()))**  

 그리고 최종적으로 join으로 뜨어쓰기 " " 를 넣어주면서 다시 string 형태로 변형해줍니다
  **=join(" ")**


<br/><hr/><br/>

## **Slice and Splice**

두 배열을 이용해, 첫 번째 배열을 두 번째 배열 n 번 index 에 삽입하기.  
단, 배열들은 변화가 없어야 함.

원문 :  
 You are given two arrays and an index. Copy each element of the first array into the second array, in order.  

 Begin inserting elements at index n of the second array.  
 Return the resulting array. The input arrays should remain the same after the function runs.

<br/>

```javascript
function frankenSplice(arr1, arr2, n) {
  let result = [...arr2];
  result.splice(n, 0, ...arr1);
  return result;
}
```

풀이 : 설명할 내용은 없습니다. ...syntax 를 이용해 기존 배열들 건드리지 않았다는 정도만 언급하면 될 것 같습니다.


<br/><hr/><br/>

## **Falsy Bouncer**

Falsy Value 제거하기  

***Falsy Values** ? : 구글링 필수.  

Falsy values in JavaScript  
- false
- null
- 0
- ""
- undefined
- NaN.  
<br/>

```javascript
function bouncer(arr) {
  return arr.filter((a) => Boolean(a) != false);
}
```


<br/><hr/><br/>

## **Where do I Belong**
순열로 된 arry(첫 번째 인자) 에서 값(두 번째 인자)을 가진 가장 낮은 index를 찾기.  

원문 :  
 Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.  

 **The returned value should be a number.**

 For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).  

 Likewise, getIndexToIns([20,3,5], 19) should return 2
 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2)and greater than 5 (index 1).  
  <br/>
 
```javascript
function getIndexToIns(arr, num) {
  return arr.filter((a) => a < num).length;
}
```


<br/><hr/><br/>

## **Mutations**
배열의 첫 번째 요소에 두 번째 요소의 각 글자를 모두 포함하면 True  
아니면 False 를 반환하기.

  
원문 :  

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

- ["hello", "Hello"] return True  
: because all of the letters in the second string are present in the first, ignoring case.  

- ["hello", "hey"] return False  
: because the string hello does not contain a y.  

- ["Alien", "line"] return True  
: because all of the letters in line are present in Alien.  

 <br/>

```javascript
function mutation(arr) {
  return  arr[1]
    .split("")
    .every(letter=> new RegExp(`${letter}`, 'i').test(arr[0]));
}
```

풀이 :  

제가 풀이할 때 

정규표현식으로 인자를 사용하기 위해 new RegExp 에서 `${}` - [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)( ` )사용했습니다,

FreeCodeCamp 에서 정규표현식을 쓰지 않은 경우가 아래이고,

```javascript 
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
  });
}
```

더 코드가 짧은 답변은 
```javascript
function mutation(arr) {
  var re = new RegExp('[^'+arr[0]+']', "i");
  return !re.test(arr[1]);
}
```

였습니다.

<br/><hr/><br/>

## **Chunky Monkey**

배열(첫 번째 인자)을 size(두 번째 인자)의 크기의 2차원 배열로 나누기.

원문 :  
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

case :  
1. chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
2. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
3. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
4. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
5. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
6. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
7. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].


```javascript
function chunkArrayInGroups(arr, size) {
  for(let i=0; i<arr.length; i++){
    arr.splice(i, size, arr.slice(i,size+i));
  }
  return arr;
}
```

반복문 i 는 0에서 시작하기 때문에, arr(배열)의 i번째에서 size 인자 만큼을 내용 그대로 array 화 시킵니다.

slice(i, size+i)로 반복문이 진행되도, slice 함수의 end 인자(두 번째 :size+i)가 동적일 수 있게 i를 더해줍니다.(항상 잘라올 배열의 사이즈와 위치가 같아지도록.)

위 반복문의 이해를 위해 쉽게 콘솔에 출력하도록 바꾸어 보면 쉽다.

```javascript
function chunkArrayInGroups(arr, size) {
  for(let i=0; i<arr.length; i++){
    console.log(arr.slice(i,size+i));
    arr.splice(i, size, arr.slice(i,size+i));
    console.log(arr)
  }
  return arr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 2);

---console view---
[ 0, 1 ]                            // arr 로 부터 slice한 배열 (slice(0,2))
[ [ 0, 1 ], 2, 3, 4, 5, 6 ]         // 바꿔줄 요소 (splice(0 , 2, slice한 배열))
[ 2, 3 ]
[ [ 0, 1 ], [ 2, 3 ], 4, 5, 6 ]
[ 4, 5 ]
[ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], 6 ]
[ 6 ]
[ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6 ] ]
```