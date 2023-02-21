# <span style="color:cyan">**Memory management**</span>

Low-level language : C언어는 수동 메모리 관리를 위한 기초요소(ex : malloc(); free(); )를 가지고 있는데, 반대로 Javascript 의 경우에는 garbage collection 기능으로 더 이상 쓰이지 않는 경우 만들어진 object에 대해서 자동적으로 메모리를 풀어준다(free)

이 기능 때문에 개발자에게 memory에 대한 관리에 대한 잘못된 인식을 줄 수 있다.

<br>

### <span style="color:teal">**1. Memory life cycle**</span>

---

programming language에 상관 없이, 거의 대부분 비슷한 life cycle 을 가지고 있다.

    1. 필요한 메모리를 할당하고
    2. 할당된 메모리를 사용(Read & Write)
    3. 더 이상 필요로 하지 않을 때는 할당된 메모리를 풀어준다.

2번째 과정은 모든 언어에서 명시적으로 같다. 1번과 3번은 low-level 언어에서는 같지만 , high-level language : Javascript 같은 언어에서는 불명확하다.

<br>

### <span style="color:teal">**2. Javascript 에서 Allocation : 메모리 할당**</span>

---

javascript 는 자동적으로 value 가 초기 선언이 되면 메모리를 할당한다.\

```javascript
const n = 123; // allocates memory for a number
const s = "azerty"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
const a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener(
  "click",
  () => {
    someElement.style.backgroundColor = "blue";
  },
  false
);
```

<br>

### <span style="color:teal">**Value 사용**</span>

---

Value를 사용하는 것은 기본적으로 할당된 메모리를 읽고 쓰는 것을 의마한다. 이는
변수를 읽거나 쓸 때, 혹은 fuction 을 통해 인자로 passing 하느 경우도 해당한다.

<br>

### <span style="color:teal"> **Memory release**</span>

---

Javascipt 에서는 자동으로 메모리관리를 해주는 garbage collection 이 있는데, 인느 자동으로 할당된 메모리 block 에 대해서 더 이상 사용하거나 재선언될 일이 없는 경우를 결정해 메모리 할당을 감시(\*monitor)한다. 이 자동 프로세스는 메모리 조각이 아직 필요한지 아닌지를 결정할 근본적인 문제 해결 능력을 가진 것이 아니다.

<br>

<br>

## <span style="color:tomato">**Gabage collection**</span>

---

현재까지 서술한 내용에 따라 , "더 이상 필요로 하지 않는" 상태의 메모리 판단 기준을 어떻게 정하느냐가 근본적인 문제이다.

인과관계를 따지면, "garbage collector" 는 이 근본적인 문제에 제한된 솔루션을 구현한 것이다.

<br>

### <span style="color:orange">**References**</span>

---

Garbage collection 알고리즘 개념은 _reference_ 라는 개념에 의존한다, 메모리 관리의 맥락에서, reference 라는 의미는 객체가 다른 하나의 객체에 접근(\*access)한 경우를 말하는데 사용된다. 예를 들어

Javascript 객체는 [prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) 과 이에 해당하는 proerties value를 참조(reference)한다.

이런 상황에서 객체라는 의미는 보통의 object : 객체라는 의미보다 좀 더 광범위한 의미가 된다.

### <span style="color:orange">**Reference-counting garbage collection**</span>

---

다음 알고리즘이 가장 기본이되는 garbage collection 알고리즘으로, 객체가 아직 다른 객체를 참조하고 있는지에 따라, 필요여부를 결정하는 문제를 줄여주는 역할을 한다.

만약 참조하고 있는 값이 없을 경우, 다른 말로 zero reference 상태가 되면 이 객체는 "garbage" 로 구분된다.

_예시_

```javascript
let x = {
  a: {
    b: 2,
  },
};
```

2개의 객체가 생성되었으며, 한개는 다른 1개를 참조하며, 다른 하나는 자체적으로 하나의 값을 가지고 있다.
그리고 'x' 변수에 가상으로 할당된 참조 값이 있다.
현재는 명백히 garbage-collect될 값이 없다.

let y = x;
// 여기서 y는

x = 1;
// Now, the object that was originally in 'x' has a unique reference
// embodied by the 'y' variable.

let z = y.a;
// Reference to 'a' property of the object.
// This object now has 2 references: one as a property,
// the other as the 'z' variable.

y = "mozilla";
// The object that was originally in 'x' has now zero
// references to it. It can be garbage-collected.
// However its 'a' property is still referenced by
// the 'z' variable, so it cannot be freed.

z = null;
// The 'a' property of the object originally in x
// has zero references to it. It can be garbage collected.

```

```
