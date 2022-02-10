/*Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1. Usernames can only use alpha-numeric characters.

2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3. Username letters can be lowercase and uppercase.

4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters. */

let username = "";
let userCheck = /^[a-z][a-z]+\d*$ | ^[a-z]\d\d+$/i;
userCheck.test(username);

/* test Case 
Your regex should match the string JACK
Your regex should not match the string J
Your regex should match the string Jo
Your regex should match the string Oceans11
Your regex should match the string RegexGuru
Your regex should not match the string 007
Your regex should not match the string 9
Your regex should not match the string A1
Your regex should not match the string BadUs3rnam3
Your regex should match the string Z97
Your regex should not match the string c57bT3
Your regex should match the string AB1
Your regex should not match the string J%4*/
//

//Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
let hello = "   Hello, World!  ";
let wsRegex = /(\s{2,})/g;
hello.replace(wsRegex, "");
//result = "Hello, World!"

/*Write a regex fixRegex using three capture groups that will search for each word in the string one two three.
Then update the replaceText variable to replace [one two three] with the string [three two one] and assign the result to the result variable.
Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.*/

let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/; 
let replaceText = "$3 $2 $1"; 
str.replace(fixRegex, replaceText);

/*Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.*/
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; 
reRegex.test(repeatNum);
/*Your regex should use the shorthand character class for digits.
Your regex should reuse a capture group twice.
Your regex should match the string 42 42 42.
Your regex should match the string 100 100 100.
Your regex should not match the string 42 42 42 42.
Your regex should not match the string 42 42.
Your regex should not match the string 101 102 103.
Your regex should not match the string 1 2 3.
Your regex should match the string 10 10 10.*/