# Free Code Camp Algorithms Certification.

# 1. Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

팬린드롬 체커. 철자를 뒤에서 시작하도, 앞에서 시작해도 같은 단어나 문장이 되는 것을 palindrome 이라고 합니다. 특수 기호나 빈 칸, 대문자 소문자에 영향을 받지 않습니다.
<br>

```javascript

function palindrome(str) {
  const alphanumeric = str.replace(/[^A-Za-z0-9]/g,"").toLowerCase()
  const palindrome = alphanumeric.split("").reverse().join("").toLowerCase()
  return  alphanumeric === palindrome;
}

palindrome("eye");

```

풀이 : 정규표현식을 이용해서 alphanumeric 조건을 구현하고, 소문자로 바꿔줍니다.
그리고 해당 문자를 뒤집어서 뒤집기 전과 같은가를 비교하여 리턴해줍니다.

<br>

# 2. Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

주어진 숫자를 로마 숫자로 변경합니다 (대문자)

<br>

```javascript

function convertToRoman(num) {
  let numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let symbols = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  let i = 12;
  let result = ""
  while (num > 0) {
    let divide = Math.floor(num / numbers[i]);
    num = num % numbers[i];
    while (divide--) {
      result += symbols[i];
    }
    i--;
  }
  return result
}

convertToRoman(36);

```
풀이 : 로마 숫자 리스트와 해당 매칭되는 숫자들의 오브젝트나 어레이를 만들어서 
주어진 숫자에 대해서 나눌 수 있는 첫 로마숫자 수치부터 나누어줍니다. 이때 나누어진 값이 1이상이면 해당 로마숫자를 리턴하고,
나누고 난 나머지는 다시 같은 일정을 반복시키는 반복문을 사용합니다.

위 로직을 풀어보면.  예를 들어 16 수가 있다면

16을 나누었을 때 결과가 1이상이 될 수 있는 로마숫자를 반목문에서 찾게되면. 10 : X 가 해당이됩니다. 

이제 divide가 1이 되고, 반복문안 반복문의 조건이 divide -- 이기 때문에 0을 만들면서 내부에 있는 내용들이 실행이 됩니다.

그 내부 내용이 방금 1이상으로 결과값이 나오게 해준 로마숫자이고,
나누고난 나머지 6은 다시 같은 결과를 반복해서
 16/10, 1과 나머지 6이므로 10에 해당하는 X가 리턴,
 나머지에 대해 6/5 는 1이상의 값을 가지므로 5에 해당하는 V가 리턴이 되고
 1이 남게되면 I에 1로 나뉘고 나머지가 없기 떄문에 마지막으로 I가 리턴 됩니다.

 결과 XVI 가 나옵니다.

<br>
