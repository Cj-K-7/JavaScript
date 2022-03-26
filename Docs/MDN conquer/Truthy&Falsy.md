# Truthy & Falsy 

자바스크립트에는 truthy / falsy 라는 용어가 있습니다.

 Boolean context에서 기본적으로 True 값으로 취급되는 값들을 Truthy 라고 합니다.
 그러면 반대로 False 값으로 취급되는 값이 Falsy 이죠.

 무슨 말이냐.

 쉽게 조건문, 삼항 연산자, 그리고 논리 AND 연산자 에서 우리가 참과 거짓을 비교할때,

```javascript
 if( variable === true )
```

 위처럼 비교연산자(===)를 쓸 필요 없이 

```javascript
 if( variable )
```

이렇게 그냥 내부에 쓴 변수내용 자체가 이미 true나 false로 취급하는 기준 값이 truthy / falsy 라고 보시면 됩니다.

값이 없을때, 혹은 함수의 리턴 값이 없을때를 처리할때 이용하는게 보통이라고 합니다.

falsy 값은 
1. false
2. 0
3. -0
4. ""
5. null
6. undefined
7. NaN

이 있고, 그 외 나머지는 모두 truthy로 취급한다고 합니다.

