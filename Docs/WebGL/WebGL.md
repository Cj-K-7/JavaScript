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

- ## Shader

  > Shader 는 [**"OpenGL ES Shading Language (GLSL)"**](https://registry.khronos.org/OpenGL/specs/es/3.2/GLSL_ES_Specification_3.20.pdf) 언어로 만들어진 프로그램이다.

  정점(Pixels 에 대한 Position / Color로 이루어진 Data) 정보를 기반으로 스크린상에 필요한 모양을 만들고 렌더링에 필요한 데이터를 생성한다.

  WebGL 에서는 vertex shader 와 fragment shader 2가지 shader가 존재한다.
  GLSL 로 작성해서 WebGL을 통해 GPU 실행을 시켜 사용 한다. 두 shader를 한 set으로
  **"Shader Program"** 이라고 한다.

    ### Vertex shader   

    vertex shader는 Clip space 의 좌표 체계에서 webGL 을 사용해, 기본적인 좌표 체계를 Vertext Input 으로 변환시켜주는 역할을 한다.

    각각의 정점을 만들기 위해 필요한 데이터 vertex-position 을 **"gl_Position"** 으로 불리는 특수한 변수에 저장하여 변환한 정점을 반환한다.   

    ### Fragment shader   

    fragment shader는 vertex shader로 정점들의 모양잡힌 후에 실행되며, 각 pixel에 적용될 [texel](https://developer.mozilla.org/en-US/docs/Glossary/Texel) texel 정보(색상)를 파악하는, pixel 의 색상을 결정한다.   
    
    색상은 **gl_FragColor** 변수에 저장되어 반환된다.
