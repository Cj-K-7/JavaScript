# Regular expressions

Regular expressions are patterns used to match character combinations in strings  
The RegExp object is used for matching text with a pattern.
  
<hr>
  
## **" / / "**   :  new RegExp  
 정규 표현식 기본 표현입니다. 찾고자 하는 내용을 /로 감쌉니다.
ex.) const re = /a/; 
  
<hr>
  
## match(); / test();
정규표현식 대응 결과를 나타내는 대표적인 함수로 syntax가 반대입니다. 
```javascript
string.match(RegExp);  //return object of matched data  
RegExp.test(string);  //return boolean
```
  
<hr>
  
## Patterns

- **" / /i "**  
:  insensitive flag 정규표현식이 대문자와 소문자 구분 없이 대응 확인하게 해줍니다.  

- **" / /g "**  
:  insensitive flag 정규표현식과 대응되는 모든 부분을 가져옵니다.(match 함수로 가져올 경우 대응된 매 요소를 Array 형식으로 가져온다)  

```javascript
const a = "asdasdasdaadada"

a.match(/a/);
  // return ['a', index: 0, input: 'asdasdasdaadada', groups: undefined]
a.match(/a/g);
  // return ['a', 'a', 'a', 'a', 'a', 'a', 'a']
```

- **" { , } "**  
:  = { minDigit , maxDigit } Continuity min, max value.: **Quantity specifiers**   
if maxDigit is empty, mean no-limit. ex.) { 3, } it means repeated more than 3 time.  
 양의 정수인 두 값이며 min <= max 조건 하에서 작성되어야 합니다.  
앞에 나온 표현식이 최소 min개, 최대 max개 인 부분과 대응됩니다.
Max 값이 없으면 "최소 min 이상" 대응에 모두 포함이 됩니다.

- **" \+ "**  
:  = { 1, } Continuity more than 1  
{1, } 과 같습니다.

- **" \* "**  
:  = { 0, } Continuity more than 0  
{0, } 과 같습니다.

- **" ^ "**  
:  beginning.  
입력의 시작 부분입니다. 맨 앞에서 바로 다음 오는 표현으로 시작되는지 확인합니다.
```javascript
/^A/.test("an A") = false;
/^A/.test("An a") = true; 
```

- **" $ "**  
:  end.  
입력의 끝부분입니다. 맨 뒤에서 바로 앞에 오는 표현이 마지막에 오는지 확인합니다.

- **" ? "**  
:  = { 0, 1 } if it exist, include it, else do not , If used immediately after the quantifiers *, +, ?, {}, it makes a quantifier that is by default greedy (matches as many characters as possible) non-greedy (matches the fewest possible characters).   
For example, applying /\d+/ to "123abc" will match "123". However, applying /\d+?/ to the same string only matches "1".  
{ 0, 1 } 과 같습니다. 앞에 오는 표현이 있으면 포함하여 대응하고, 없을 경우 없는 표현상태로 대응을 합니다.  
단 수량자 표현 바로 뒤에 사용하면 가능한한 적은 문자를 반환합니다.


- **" . "**  
:  Matches any single character except line terminators: \n, \r, \u2028 or \u2029. For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day".  
Inside a character class, the dot loses its special meaning and matches a literal dot.

- **" ( ) "**  
: Parentheses around any part of the regular expression pattern causes that part of the matched substring to be remembered.

- **" [ ] "**  
:  Character set. This pattern type matches any character in parentheses (even escape sequences). Special characters such as dot (.) or asterisk (*) are not special characters within the charset. So there is no need to escape. You can use hyphens(-) to specify a range of characters.