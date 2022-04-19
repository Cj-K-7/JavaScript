# Redux

리덕스란 "action" 으로 부르는 event를 통해서 어플리케이션내의 'state'를 관리, 업데이트 하는 패턴 & 라이브러리로,


## Store 
```
 'global state'로 관리할 수 있게 도와주는 역할.
```
  중앙화된 'store' 를 통해서 전체 어플리케이션에 필요한 state를 예측가능한 상태로 관리하게 해준다.

```
1. 앱 내에서 많은 양의 state를 사용해야 할 경우.
2. state의 변화 주기가 잦은 경우.
3. state 변화의 구조가 복잡해져야 하는 경우.
4. 앱의 구조가 크고, 많은 사람들이 협업을 해야하는 경우.
```

```
항상 리덕스가 필요한 것이 아니기 때문에, 상황에 알맞는 툴 선정.
```

# Redux Terms and Concepts

 ## "one-way data flow"

  ```
  1. State : state가 앱의 특정 시점에 있는 앱 조건을 나타내며
  2. View : UI가 state에 따라 render 가 일어나고,
  3. Action : Event에 따라 state가 변화(update)되고,
  4. 이에 따라 새로운 state에 기반한 view가 re-rendering 된다.
  ```

 redux는 더 복잡하고 많은 component들을 사용하면서, 전역 State로서 사용하면 이를 
한 번에 특정 공간안에서 코드를 관리하고, 예측가능한 패턴화를 통해 코드 생산성을 늘리는데 그 의미를 둔다.

 ## "Immutability"

    Redux에서는 모든 state가 update 될때, 원형이 변하지 않고 update 되는 것일 기본으로 기대한다. 


 ## "Terminology"

### 1. Action
    
    action은 기본 자바스크립트 객체의 type 필드로, 어플리케이션의 특정 event를 묘사하는 것이라고 여기면 된다.

    action object는 추가적인 이벤트 정보를 가지는데, 이것을 payload라고 한다.

### 2. Reducers

    reducer는 현재 state와 action object를 받아서 새로운 state를 반환하는 fucntion이다.
    reducer를 일종의 eventlistener로 취급하면 된다.

    ```
     1. 새로운 state 를 반환할 때 구조는 기존 state와 action을 인자로 삼는다.
     2. immutable update
     3. 비동기 처리를 해서는 안된다.
    ```
  
### 3. Store

    리덕스의 앱 state들은 store라는 객체 안에서 존재한다.
    state 저장소이며 여기에 저장을 해둬야 꺼내 쓸 수 있다고 생각하면된다.

### 4. Dispatch

    action 을 통해서 state를 변화시킬때의 method 로 dispatch를 사용해야 한다."triggering an event"

### 5. Selectors

    selector는 store에 있는 특정 state value를 사용하기 위한 function이다. 
    

    