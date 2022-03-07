# Functional Programming

 functional programming 이란 단순 명료, 직관적, 독립적(isolated)으로 어떤 다른 sideEffect 없이 " INPUT => PROCESS => OUTPUT " 으로 해법(solution)을 프로그래밍 스타일을 말한다.

  functional programming은 다음과 같은 특징을 가진다.  
    

<hr>
  <br>

  ## 1. Isolated function :  
  프로그램 state에 의존(dependence) 없이 독립적으로 사용 가능한 기능.

  ## 2. Pure function :  
  같은 INPUT은 같은 OUTPUT을 가진다.

  ## 3. Limited SideEffect :  
  기능 목적에 맞게 Function 외부에 있는 State에 영향을 주지 않도록 제어된다.

  <br>
<hr>

<br>
 
## 1. [CallBack]  
<br>

 Callback 함수는 다른 함수를 지나가면서(passed), callback 함수가 실행됨에 따라, 해당 지나간 함수의 실행( invocation ) 에 따라 return 을 하거나, 실행 여부를 결정짓는 함수를 말한다.

 JS에서 대표적으로 filter() 함수가 callback 함수를 이용해 배열을 필터하는 함수이다.

 함수가 variable처럼 사용이 되는 것으로 fist class function이라고 표현한다. JS에서는 모든 function 이 해당된다.

 반대로 함수를 인자로 삼거나, 함수를 return 하는 함수를 higher order function 이라고 한다.

<br>
<br>


 ## 2. [Imperative Code]
<br>

  명령형 코드는 프로그래밍 상태를 변경시키는 연산 방식 프로그램 패러다임의 일종이다. 컴퓨터가 실행할 명령을 내리는 코드로, 선언형 프로그래밍과 반대되는 개념이다.

  JS 에서는 이미 정의된(predefiend) 메소드들이 있는데, 예로 Array.prototype method (map, splice, slice....) 가 있다. 이미 정해져있는 명령형(imperative) 코드들을 어느정도 이해해서, 원치 않는 기능개발이 되지 않도록 해야한다.

<br>
<br>

## 3. [Mutation / Side Effects]
<br>

   Javascript에서 보통 Mutation(변연/변형) 이나 SideEffect는 JS 명령형 코드들을 사용할때 자주 일어난다. 혹은 for반복문에서 조건이나 논리 구조를 어떻게 구성한지에 따라서도 발생한다.

   Mutation은 전역변수나, State에 변화가 생기는 것으로, 반복적인 기능 수행이나, 프로그래밍한 구조에 따라 전역변수를 사용하는 다른 함수들에게 영향을 주기 때문에, 이로 인해, 생각지도 못한 결과들이 따라올 수 있다.

<br>
<br>

## 4. [Avoid External Dependence in a Function]  

<br>
  functianal programming을 할 때, 지키는 원칙 중 하나로, 의존성(dependency)이 없이 독립적으로 사용될 수 있도록 해야한다. 

  이는 함수 외부에 있는 변수들, 객체들 혹은 또 다른 함수들에 의해 결과가 바뀌지 않고, 같은 조건의 입력에는 항상 정해진 하나의 출력을 가지는 일관성을 가지게 해준다. 

  방식은 함수 선언에서 매개변수 : parameter 와 인자 : argument 를 활용한다.

  ex)
  ```javascript
  let value = 2;

  function incrementer(number) {
     return number + 1;
  }

  incrementer(value);
  ```

<br>
<br>

