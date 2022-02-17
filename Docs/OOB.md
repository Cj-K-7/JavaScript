# Object Oriented Programming, OOP

 컴퓨터 프로그래밍 패러다임 중 한 방식으로,  
  컴퓨터 프로그램을 수많은 명령어로 이루어진 목록으로 보는 방식에서,  "Objects" 객체들로 이루어져 있다고 시각을 바꾸어 파악하고자 하는 것.

  <br><br>

# 객체 Object   
 OOP 패러다임에서 객체는 변수 , 함수, 데이터 구조를 포함하는 하나의 저장소이다.  

<br>    

## JavaScript 에서의 Object
<br>

```javascript
let me = {
  name: "CJ",
  numLegs: 2
};
```
 "me" 라는 객체가 있고 객체는 'name'과 ' 'numLegs' 2개의 property와 그에 맞는 value를 한 쌍으로 가지고 있다.  
 <br>

## 1. [Access Value of Object's property]
이렇게 객체가 가지는 property의 value는 "."을 이용해 접근이 가능하다.
  
```javascript
let duck = {
  name: "Aflac",
  numLegs: 2
};

console.log(duck.name);
```

 <br>

## 2. [Method]
객체가 가지는 function property를 method라고 한다.  

```javascript
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};

duck.sayName();
```
위에서 sayName의 property가 함수처럼 사용이 될 수 있다.

 <br>  

## 3. [this.]

여기서 객체 스스로의 property를 재사용할 때 사용하는 것이 "this" 이다.
이는 객체 내 값을 이용해 객체 구조를 만들거나 메소드를 만들때, property 의 value값이 변화하여도 재사용할 수 있게 해준다.

```javascript
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```
 <br>

## 3. [Constructor Function]

Constructor 는 새로운 객체를 생성해주는 function 이다.
이 Constructor 로 생성될 객체의 properties 와 behaviors(Methods)를 정의한다.
새로운 객체 생성을 위한 Blueprint 라고 생각하면 쉽다.

```javascript
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```
 <br>

## 4. [Constructor Argument]

 위처럼 constructor 를 선언해서 새로운 객체를 생성하면 모든 Bird constructor로 만들어진 객체는 name = "Albert"가 된다.

 property나 method 구조만 그대로 사용하고 각각의 value를 유동적으로 변경하기위해
 constructor 에 인자(argument) 를 주어 해당 인자가 각 property의 value가 되게끔 한다.

```javascript
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

let swan = new Bird("Carlos", "white");

console.log(swan.name);
```
이러면 인자로 받은 name 과 color 가 constructor에서 해당 property에 할당한대로 적용된 것을 알 수 있다.
  
 <br>
 
## 5. [Prototype]
 portotype 은  Javascript에서  거의 모든 constructor 가 기본으로 가지는 property  로, prototype을 통해 property를 선언하면 모든 constructor 로 만들어진 instances(객체들)에게 공유가 된다.

```javascript
 Bird.prototype.numLegs = 2;
```

 이제 모든 Bird 의 instatnce들은 numLegs = 2 의 property를 가진다.

 <br>


## [Immediately Invoked Function Expression (IIFE)]

A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
  console.log("Chirp, chirp!");
})();
This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

//

 클래스( Class : 객체를 선언하기 위해 변수와 메소드를 구조를 정의하는 틀)

  객체는 클래스의 인스턴스(instance : 틀에 맞게 생긴 객체) 이다.
 