# Regular expressions

Regular expressions are patterns used to match character combinations in strings  
The RegExp object is used for matching text with a pattern.

## **" / / "**   :  new RegExp  

ex.) const re = /a/; 

string.match(RegExp);  //return object of matched data  
RegExp.test(string);  //return boolean 

- **" / /i "**  
:  insensitive flag
- **" / /g "**  
:  insensitive flag
- **" { , } "**  
:  = { minDigit , maxDigit } Continuity min, max value.: **Quantity specifiers**   
if maxDigit is empty, mean no-limit. ex.) { 3, } it means repeated more than 3 time.

- **" \+ "**  
:  = { 1, } Continuity more than 1

- **" \* "**  
:  = { 0, } Continuity more than 0

- **" ^ "**  
:  beginning.

- **" $ "**  
:  end.

- **" ? "**  
:  = { 0, 1 } if it exist, include it, else do not , If used immediately after the quantifiers *, +, ?, {}, it makes a quantifier that is by default greedy (matches as many characters as possible) non-greedy (matches the fewest possible characters).   
For example, applying /\d+/ to "123abc" will match "123". However, applying /\d+?/ to the same string only matches "1".

- **" . "**  
:  Matches any single character except line terminators: \n, \r, \u2028 or \u2029. For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day".  
Inside a character class, the dot loses its special meaning and matches a literal dot.

- **" ( ) "**  
: Parentheses around any part of the regular expression pattern causes that part of the matched substring to be remembered.

- **" [ ] "**  
:  Character set. This pattern type matches any character in parentheses (even escape sequences). Special characters such as dot (.) or asterisk (*) are not special characters within the charset. So there is no need to escape. You can use hyphens(-) to specify a range of characters.