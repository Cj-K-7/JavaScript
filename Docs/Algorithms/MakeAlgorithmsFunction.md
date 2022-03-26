# Make Function Using Algorithms 

## 1. Look Up Value by Key 

주소록에 있는 요소 Key를 이용해 해당 Key 의 Value를 찾는 함수 만들기

원문 :  
Find "Value" by using "Key" as argument.

lookUpProfile("Kristian", "lastName") should return the string Vos

lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]

lookUpProfile("Harry", "likes") should return an array

lookUpProfile("Bob", "number") should return the string No such contact

lookUpProfile("Bob", "potato") should return the string No such contact

lookUpProfile("Akira", "address") should return the string No such property  
<br/>

```javascript
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName == name){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            } else {
                return "No such property"
            }
        }
    }
    return "No such contact";
}
```

Case Result
```javascript
let name = "Akira"; 
let prop = "likes";

lookUpProfile(name, prop);

["Pizza", "Coding", "Brownie Points"]
```