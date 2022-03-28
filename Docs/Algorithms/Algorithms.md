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


# 3. Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

카이사르 암호화 입니다. 

ROT13 암호 응용해서 string 을 리턴하는 조건입니다. 대문자화 시키고, 알파벳이 아닌 경우는 변형은 없어야 합니다.

<br>

```javascript
function rot13(str) {
  return str.split("").map((char)=>{
    const base = char.charCodeAt();
    const cipher = base+13 > 90 ? base-13 : base+13;
    if(base<=90 && base>=65) return String.fromCharCode(cipher)
    else {return char}
  }).join(""); 
}

rot13("SERR PBQR PNZC");
```
풀이 : 카이사르 암호화에서 ROT13 이면 알파벳이 13씩 밀린 것을 의미합니다.
다행히, charCodeAt() / fromCharCode() API 를 통해서 숫자를 불러올 수 있습니다.
"A" 가 65부터 시작하고 "Z"가 90에서 끝나기 때문에 90 이상 넘어가지 않게 조건을 거는 것만 해주시면 쉽게 끝이 납니다!.

<br>


# 4. Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


유효한 전화번호 검증 기능 개발 입니다. 위 내부 예시들과 같은 형식이 아닌 경우는 false가 나오게 해야하며, 지역코드 는 필수 입니다. 만약 국가코드가 주어지면 1인지 확인이 필요합니다.

<br>

```javascript
function telephoneCheck(str) {
  if (/^(1\s?)?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/.test(str))
  return true;
  return false;
}

telephoneCheck("555-555-5555");
```
풀이 : 예제의 패턴을 보고 정규표현식을 구현하면 쉬운 문제입니다.

첫번째에 국가코드가 온다면 1이어야 하고 한칸 띄어쓰기를 할 수도 있기 때문에  

```
   ^(1\s?)?   
```

 1로 시작할 수도 있다. 1로 시작하면 띄어쓰기(\s)를 할 수도 있다.  
       
 로 구현합니다.

두번째는 3자리 숫자이면서 괄호로 묶여있을 수도 있습니다.

```
(\d{3}|\(\d{3}\))
```

digit 3자리 이거나 혹은 ()로 둘러싸인 digit 3자리를 구현합니다.  


다음으로 숫자들간 사이에 공백이나, - 부호, 혹은 그냥 빈칸이 없을 수도 있습니다.

```
[-\s]?
```

그 뒤는 앞에 숫자자리수패턴과 똑같습니다.


<br>


# 5. Cash Register 

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

캐시 레지스터 : 자동 현금거래 계산기로 잔거스름 계산하면서 열고 닫는 계산대 의 로직을 만드는 문제입니다.

```javascript 
function checkCashRegister(price, cash, cid) {
  let change = [];
  let result = {status : "OPEN", change}
  let totalChange = cash - price;
  const currency = [ "PENNY" , "NICKEL", "DIME" , "QUARTER", "ONE", "FIVE","TEN", "TWENTY","ONEHUNDRED"]
  const value = { "PENNY" : 0.01, "NICKEL" : 0.05, "DIME" : 0.1, "QUARTER": 0.25, "ONE" : 1, "FIVE": 5, "TEN" : 10, "TWENTY": 20, "ONEHUNDRED": 100 }
  const rest = cid.reduce((a,c)=> {
    a[c[0]] = c[1]  
    return a
} , {})

  let i = 8;

  while(totalChange>0 && i>=0){
    const currencyValue = value[currency[i]];
    let count = Math.floor(totalChange/currencyValue);
    const neededCid = count*currencyValue;
    const currencyCid = rest[currency[i]]
  if(currencyCid - neededCid < 0) {
  change.push([currency[i], currencyCid])
  totalChange = (totalChange-currencyCid).toFixed(2);
  } else {
    change.push([currency[i], neededCid])
  totalChange =( totalChange-neededCid).toFixed(2);
  }
    i--;
  }


  if(totalChange >0){
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  } else {
    if(result.change.reverse().every((a,i)=> cid[i][1]===a[1])){
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }
    result.change = result.change.filter(a=> a[1] !== 0);
  }
  result.change.reverse().sort((a,b)=>b[1]-a[1]);

return result;
}
```

풀이 : 첫 번째로 현재 통화량에 대한 값과, 내가 가지고 있는 cid 를 알아야,
잔거스름을 줄때, 부족한지 충분한지, 또 어떤 단위의 화폐가 부족하고 얼마나 줄 수 있는지에 대해서 계산을 해야합니다.

그래서 필요한 것이.

현재 통화 기준인 화폐 기준 currency과 그 화폐의 가치 Value 를 가지고서는 시작합니다.
그리고 현재 남아있는 cid를 object 취급하기 위해 reduce를 사용햇습니다.

잔거스름의 총량은 받은 현금(cash)에서 산 금액의 가격 (price)를 뺀 금액이고,
잔거스름을 줄때는 초과하지는 않고, 가장 가까운 가치의 화폐를 주는 것부터 시작해야합니다.

로마 숫자로 변형하는 문제를 응용해보면, 기준치에서 가장 먼저 거스름을 화폐가치로 나눈 수가 
1이상인 화폐를 반복문으로 찾고, 그 화폐가 몇개가 필요한지 세서 그만큼을 change에 포함시켜주는 과정을 나타냅니다.

만약 현재 가지고 있는 cid 화폐가 모자라서 더 낮은 화폐가치로 잔돈을 줘야한다면, 이때 필요한 것이, 현재 계산하고 있던 화폐기준에서 필요한 잔돈 금액과, 실제 가지고 있는 화폐기준 잔돈의 총량입니다. 두 금액간의 차이를 다음 더 작은 단위의 화페기준에서 메꿔줘야 하기 때문이죠.

이것을 반복하면 0.01가치 화폐의 페니까지 가게될텐데, 중간 중간 부족햇던 금액이 계속 누적되도록 
지금의 화폐기준이 모잘랐다면, 현재화폐기준의 총량만큼만 빼주면되고, 

반대로 화폐기준은 충분하지만, 단위가 너무 높아 못준 잔거스름은 단계낮은 화폐기준으로 주면 되니,
이때는 필요한 잔돈 금액을 준 뒤 다시 계산합니다.

말이 어렵지만 쉽게 예시로 설명하면

잔돈을 1633원을 줘야 한다면, 천원짜리 1장을 주고 633원이 남겟지만, 천원짜리가 전혀 없다면, 못해도 더 아래 단계 화폐가치 기준인 500원을 3개를 줘야합니다. 그러면 500원이 충분하다는 가정하에 3개(1500원)를 먼저 주고 나중에 133원 을 계산한다고하면,  133원은 500원화폐에 미치지 못하는 가격이기 때문에 다음 화폐로 넘어갑니다. 

위와 같은 구조를 표현한 것입니다.

요점은.

 1. 화폐 가치 기준으로서 잔돈을 줄 때의, 화폐필요총량
 2. 실제 현재 Cid 로 가지고 있는 화폐의 총량

 두가지를 먼저 비교해서 현재 줄 수 있는 잔돈량을 산출해내야 합니다.

 화폐 단위마다 반복을 해주주어 결과적으로 잔돈을 줘야하는 금액이 여전히 남아있다면
 불충분함을 알려줘야하는 기능까지 구현하는 것이죠.