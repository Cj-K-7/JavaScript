# WebGL

```
OpenGL ES API를 기반으로 web에서 HTML <canvs> 태그에서 2D나 3D content를 rendering 할 수 있도록 도와주는 역할.
```

<br/>

> WebGL 은 JavaScript 와 GPU로 실행되는 Shader code (GLSL)로 구성된 제어코드 프로그램이며, WebGL element는 다른 HTML element와 같이 구성될 수 있다.

<br/>

<hr/>

<br/>

## 1. WebGL Declare

<br/>

```HTML
<canvas id="glCanvas" style="...">
```

```javascript
const canvas = document.querySelector("#glCanvas");
const gl = canvas.getContext("webgl");
```

<br/>

> canvas 의 method 중 `getContext('webgl')`를 선언하여 `WebGLRenderingContext`를 얻을 수 있다. 브라우저가 webGl을 지원하지 않는 경우에는 null로 return된다.

<br/>

<hr/>
<br/>

## 2. Drawing the Scene

<br/>

- ### Shader
