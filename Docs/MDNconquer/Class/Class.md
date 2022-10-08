# Class

    object를 만들기 위한 template.

    data와 data를 통한 코드 작업을 캡슐화하는 것으로. JS에서 Class는 prototype으로 만들어지면서도, 프로토타입(ES5 class-like semantics)과는 다른 문법이나 의미를 가진다.

## Class 정의

    사실 class 는 '특별한 function' 으로,

    class를 정의하는 방법은 '함수 표현' 혹은 '함수 선언' 으로도 가능하다. class 문법은 2가지 component를 가진다.

     : class expression 과 class declaration

## # Class declarations.

클래스를 정의하는 한가지 방법으로, 'class' 키워드를 이름과 같이 사용하여 선언할 수 있다.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = hight;
    this.width = width;
  }
}
```

## # Class expressions

클래스를 정의하는 또 다른 방법으로, 이름을 짓지 않을 수도 있다.

```javascript
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// out
```

## Class 의 body 와 method 정의

성능향상을 위해 class 의 body 는 'strict mode'로 실행된다.

### # Contsructor

생성자 method는 클래스를 통해 새로 object를 만드는 특별한 method로, 명자체 constructor로 class 안에 1개만 존재한 수 있다. ( 생성자가 1개가 아니면 에러를 Throw )

생성자 method 는 생성자의 superclass(parents constructor)를 불러올 수 있는 super 키워들르 사용할 수 있다.

super 키워드는 마찬가지로 1개만 사용하여야 하고 this 키워드가 나오기 전에 선언을 해야한다.
