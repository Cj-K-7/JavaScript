# Object Oriented Programming, OOP

 컴퓨터 프로그래밍 패러다임 중 한 방식으로,  
  컴퓨터 프로그램을 수많은 명령어로 이루어진 목록으로 보는 방식에서,  "Objects" 객체들로 이루어져 있다고 시각을 바꾸어 파악하고자 하는 것.

  <br><br>

# Prototype

 Javascript 는 prototype-based 언어로, 모든 JS내 Object는 숨겨진 내부 속성(property)가지는데 ,  이것을  : **[Prototype]** (properties & methods) 이라 한다.


 <br><br>

# 객체 Object   
 OOP 패러다임에서 객체는 변수 , 함수, 데이터 구조를 포함하는 하나의 저장소이다.  

<br>    


# JavaScript 에서의 Object
<br>

Object는 변수 : variable 선언과 같다. {} 로 표현하며, property : value 방식으로 한 쌍식 표현한다. property 이름을 key라고 표현하기도 한다.  property는 데이터, 데이터구조(배열), 함수 가 될 수 있다.


예시)  
 "me" 라는 객체가 있고 객체는 'name'과 ' 'numLegs' 2개의 property와 그에 맞는 value를 한 쌍으로 가지고 있다.  

```javascript
let me = {
  name: "CJ",
  numLegs: 2
};
```

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

## 3. [Class & Constructor Function]

Class 는 객체를 생성하기 위한 템플릿이다. 구체적으로 표현하자면 object의 data/ method를 추상화 하는 역할을 하는 함수이다.  


```javascript
 class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

<br>

Constructor 는 새로운 객체를 생성해주는 function 이다.
이 Constructor 로 생성될 객체의 properties 와 behaviors(Methods)를 정의한다.
새로운 객체 생성을 위한 객체 틀 , Blueprint 라고 생각하면 쉽다.

위 표현은 Class 내에서 constructor 표현 아래는 직접 function 표현이다.

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

## 6. [Object Prototype Inhetits]

  JS 에서 Object는 몇가지 경우를 제외하고 모든 prototype을 상속한다.

  예로, hasOwnProperty()는 Object.prototype에 정의되어 있는 메소드로, JS내에서 선언한 object의 대부분에 사용이 가능하다.

  prototype 도  object인 것으로 자체적인 prototype 을 가지고 있다. 그리고 특성 또한 상속이 되는데,  이것을 prototype chain 이라 하는데, 

```javascript
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

여기서 duck 은  Bird 의 인스턴스로, Bird는 duck이라는 object의 supertype이 되며, Bird는 JS에서 순수 "Object"가 가지는 prototype을 상속받는다. 

```javascript 
Object.prototype.isPrototypeOf(Bird.prototype);
```


위는 True를 반환한다.

이제 특정 data를 object로 관리하고 분류할 때, method를 생성해서 prototype으로 사용하거나, object의 하위 object 를 생성하고 분류할때 , 상속특성을 이해하고 supertype(parent object)을 선언하여 prototype을 상속시키느 방식으로 효육적이게 관리 할 수 있게 된다.

## 7. [Immediately Invoked Function Expression (IIFE)]

 Javascript 에서 IIFE 는 함수(function)을 선언하면서 바로 실행(execute)시키는 패턴이다.

```javascript
 (function () {
  console.log("Chirp, chirp!");
})();
```
 
위 표현식은 이름이 없는 함수(function())가 바로 "Chirp, chirp!" 가 출력되게끔 바로 실행한다. 선언(declare)만으로 함수를 실행시켜버리는 것이다.

이름없이 변수에 저장되지 않고, () 로 감싸서 즉시 실행시키는 것(invoked).

 
 <br>