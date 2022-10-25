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

  Shader 는 ["OpenGL ES Shading Language (GLSL)"](https://registry.khronos.org/OpenGL/specs/es/3.2/GLSL_ES_Specification_3.20.pdf) 언어로 만들어진 프로그램이다.
  정점(Pixels 에 대한 Position / Color로 이루어진 Data) 정보를 기반으로 스크린상에 필요한 모양을 만들고 렌더링에 필요한 데이터를 생성한다.

  WebGL 에서는 vertex shader 와 fragment shader 2가지 shader가 존재한다.
  GLSL 로 작성해서 WebGL을 통해 GPU 실행을 시켜 사용 한다. 두 shader를 한 set으로
  **"Shader Program"** 이라고 한다.
