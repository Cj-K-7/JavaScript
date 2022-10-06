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
