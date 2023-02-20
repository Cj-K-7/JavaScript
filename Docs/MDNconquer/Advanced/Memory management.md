# Memory management

Low-level language : C언어는 수동 메모리 관리를 위한 기초요소(ex : malloc(); free(); )를 가지고 있는데, 반대로 Javascript 의 경우에는 garbage collection 기능으로 더 이상 쓰이지 않는 경우 만들어진 object에 대해서 자동적으로 메모리를 풀어준다(free)

이 기능 때문에 개발자에게 memory에 대한 관리에 대한 잘못된 인식을 줄 수 있다.

---

## Memory life cycle

programming language에 상관 없이, 거의 대부분 비슷한 life cycle 을 가지고 있다.

    1. 필요한 메모리를 할당하고
    2. 할당된 메모리를 사용(Read & Write)
    3. 더 이상 필요로 하지 않을 때는 할당된 메모리를 풀어준다.

2번째 과정은 모든 언어에서 명시적으로 같다. 1번과 3번은 low-level 언어에서는 같지만 , high-level language : Javascript 같은 언어에서는 불명확하다.

---

## Javascript 에서 Allocation : 메모리 할당

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

---

## Value 사용

Value를 사용하는 것은 기본적으로 할당된 메모리를 읽고 쓰는 것을 의마한다. 이는
변수를 읽거나 쓸 때, 혹은 fuction 을 통해 인자로 passing 하느 경우도 해당한다.

---

## Memory release

Javascipt 에서는 자동으로 메모리관리를 해주는 garbage collection 이 있는데, 인느 자동으로 할당된 메모리 block 에 대해서 더 이상 사용하거나 재선언될 일이 없는 경우를 결정해 메모리 할당을 감시(\*monitor)한다. 이 자동 프로세스는 메모리 조각이 아직 필요한지 아닌지 결정할 근본적인 문제 해결 방법이 아니다.

---

## Gabage collection
