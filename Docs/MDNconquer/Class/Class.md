# Class

    object를 만들기 위한 template.

    data와 data를 통한 코드 작업을 캡슐화하는 것으로. JS에서 Class는 prototype으로 만들어지면서도, 프로토타입(ES5 class-like semantics)과는 다른 문법이나 의미를 가진다.

## Class 정의

    사실 class 는 '특별한 function' 으로,

    class를 정의하는 방법은 '함수 표현' 혹은 '함수 선언' 으로도 가능하다. class 문법은 2가지 component를 가진다.

     : class expression 과 class declaration

## # Class declarations.

- 클래스를 정의하는 한가지 방법으로, 'class' 키워드를 이름과 같이 사용하여 선언할 수 있다.

  ```javascript
  class Rectangle {
    constructor(height, width) {
      this.height = hight;
      this.width = width;
    }
  }
  ```

## # Class expressions

- 클래스를 정의하는 또 다른 방법으로, 이름을 짓지 않을 수도 있다.

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

## # Class 의 body 와 method 정의

- 성능향상을 위해 class 의 body 는 'strict mode'로 실행된다.

  ### # Contsructor

  - 생성자 method는 클래스를 통해 새로 object를 만드는 특별한 method로, 명자체 constructor로 클래스 안에 1개만 존재한 수 있다. ( 생성자가 1개가 아니면 에러를 Throw )

  - 생성자 method 는 생성자의 superclass(parents constructor)를 불러올 수 있는 super 키워들르 사용할 수 있다.

  - super 키워드는 마찬가지로 1개만 사용하여야 하고 this 키워드가 나오기 전에 선언을 해야한다.

  ### # Static Methods

  - 인스턴스화할 필요없이 호출이 가능하며, 클래스의 인스턴스에서는 static method를 사용할 수 없다. 보통 유틸리티 기능을 만들때 사용되느데 caches를 사용하거나 , 고정된 환경(configuration) 을 만든다거나, 매 인스턴스간 복제할 필요 없이 데이터를 다루는데 유용하다.

    ```javascript
    class Static {

    ...

      static displayName = "Static";
      static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
      }

    ...
    }

    const p1 = new Static(5, 5);
    const p2 = new Static(10, 10);
    p1.displayName; // undefined
    p1.distance; // undefined
    p2.displayName; // undefined
    p2.distance; // undefined

    console.log(Static.displayName); // "Static"
    console.log(Static.distance(p1, p2)); // 7.0710678118654755
    ```

  ### # 프로토타입 및 정적 메서드를 사용한 this 바인딩

  - 메서드를 변수에 할당 한 다음 호출하는 것과 같이, 정적 메서드나 프로토타입 메서드가 this 값 없이 호출될 때, this 값은 메서드 안에서 undefined가 됩니다. 이 동작은 "use strict" 명령어 없이도 같은 방식으로 동작하는데, class 문법 안에 있는 코드는 항상 strict mode 로 실행되기 때문입니다.

    ```javascript
    class Animal {
      speak() {
        return this;
      }
      static eat() {
        return this;
      }
    }

    let obj = new Animal();
    obj.speak(); // the Animal object
    let speak = obj.speak;
    speak(); // undefined

    Animal.eat(); // class Animal
    let eat = Animal.eat;
    eat(); // undefined
    ```

## # Instance Properties

- "Instance Properties : 인스턴스 속성" 은 반드시 클래스 안에서 정이되어야 한다.

  ```javascript
  class Class {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  }
  ```

- Static 속성과 Prototype 속성은 클래스 선언부 바깥쪽 에서 정의되어야 한다.
