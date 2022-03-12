# Next.js

## 1. 개발 & 제작 환경  

 개발자 경험 개선: TypeScript ESLint intergration FastRefresh... etc.
제품 환경에서의 performence 제공

## 2. Compiling

 Code needs to be transformed into a version browsers can understand. so Comliler
 TypeScript/JSX => JavaScript before Browser can understand them.

## 3. Minifying

Minification is the process of removing unnecessary code formatting and comments without changing the code’s functionality. The goal is to improve the application’s performance by decreasing file sizes.

In Next.js, JavaScript and CSS files are automatically minified for production.

## 4. Bundling  

모듈이나 컴포넌트 펑션을 나누고 Export/Import 를 이용해서 복잡한 파일 의존성이 생기면
번들링을 통해서, 유저가 웹페이지에 방문했을때의 상호간 request 를 최소화하는 것을 목표로
최적화된 번들로 병합, 의존성을 해결.

Compiling is transforming code into something parsable by browsers. Bundling is resolving your applications dependency graph and reducing the number of files. 

## 5. Splitting

매 접속 지점을 간소화 하여, 페이지에 필요한 코드만 불러와 앱을 불러오는 초기 시간을 개선한다.

Improve the application's initial load

## 6. Build Time and Runtime

빌드 단계에서는 앱을 준비./ 런타임에서는 앱이 운영되고, 유저의 요청에 반응하는 단계.  
Build time (or build step) is the name given to a series of steps that prepare your application code for production.

Runtime (or request time) refers to the period of time when your application runs in response to a user’s request, after your application has been built and deployed.

## 7. Rendering

Next.js 에서는 서버사이드렌더링/스태틱사이트생성/클라이언트사이드 렌더링 총 3가지 렌더링 메소드가 가능하다.  
With Next.js, three types of rendering methods are available: Server-Side Rendering and Static Site Generation, and Client-Side Rendering.

## 8. Client-Side Navigation

Link 컴포넌트는 클라이언드 사이드 네비게이션으로,
browser의 기본적 네이게이션 형태보다 빠른 자바스크립트를 이용한 page transition을 이용.  

만약 ``` <Link href="..."> ```가 아닌 ``` <a href= "">``` 로 사용 할 경우에는 browser 가 full refresh 해버린다는 점을 유의.  

또한 Link 컴포넌트가 있다면 , Next.js 는 미리 링크되어있는 페이지의 코드를 prefetch한다.
( : prefetches the code for the linked page in the background. )
그래서 실제 링크를 클릭할시에 백그라운드에 미리 로드된 페이지를 불러오게되면서 page transtion 이 거의 즉시 일어난다.

정리하자면 Next.js 는 자동적으로 빌드하는 앱의 퍼포먼스를 위해 코드를 split 하고, client-side navigation 을 통해 full refresh 가 되지 않게 해주며, 다른 link로 prefetch가 가능하게 끔 해준다.(production 단계에서)

## 9. Assets 

Next.js 는 public directory 내부에서(under) statc assets 를 지원합니다. (statc assets의 root가 public 폴더가 된다.)

예를 들어 image의 위치가 public/images/image.jpg라면
태그내 src에서 표현은 root가 public 이므로,
```<img src="/images/image.jpg" alt="image">``` 가 된다.

여기서 HTML img 태그를 사용할 경우에, 대표적으로 다음과 같은 사항을 수동적으로 다루어야 한다.

    1. screen 크기에 따른 반응
    2. third-party tool 이나 library 를 통해 최적화
    3. viewport 에 접속했을 때만 image를 loading.

 대신 Image 컴포넌트를 제공한다.

 next/image 은 HTML img 태그의 모던 웹 extension으로, 모던 웹에서 사용된느 포맷의 이미지들(WebP 같은)dmf resizing / optimizing, serving 할 수 있게 해준다. 

이런 특징은 새로운 이미지 포맷에도 자동적으로 적응하고, 해당 포맷을 지원하는 브라우저에도 적용될 수 있다. 또, 최적화는 어떤 image source 라도 적용이 되어, 외부에서 host된 이미지에도 적용된다(예로 CMS)

Image 컴포넌트는 항상 CLS( 누적 레이아웃 이동 : 예기치 못한 시각적 요소의 변동으로 인한 유저 경험에 대해서 점수를 매김, 낮을 수록 우수한 사용자 경험을 보장. )를 피하고 최대한 [Core Web Vital](https://web.dev/vitals/#core-web-vitals) 다가갈 수 있도록 렌더링이 된다.


## 10. Metadata

HTML tag에서 title 이나 head 를 수정하기를 원할때 단순히 
```
<Head> </Head>
```
로 Nesting 하여 수정할 수 있다. (head 의 extension처럼 사용)
(You can import the Head component from the next/head module.)

## 11. Third-Party JavaScript

third-party script를 추가할때, 기존 script 태그를 사용할 경우, 같은 페이지 내 어떤 시점에서 
해당 script 의 JS가 fetch되는지 특정하기가 어렵고, 특정 script 가 렌더링이나 page의 컨텐츠 로딩에 딜레이를 발생시킬 수 있어, 성능에 영향을 줄 수있다.

next/script 모듈의 ```<Script></Script>```(script 의 extension ) 으로 다음과 같은 property들을 가진다.

    1. 'strategy' : third-party script 를 언제 로드할지 제어한다.
    2. 'onLoad' : 스크립트가 로딩이 끝나자마자 실행될 JS 코드를 적을 수 있다.

(주석 .결론적으로는 script 로딩 시기를 특정화해서 성능응 향상시키고, 콜백 기능을 추가해주는 extension이라고 생각하면 되는거 같다.)

## 12. CSS Styling
```
<style jsx>{``}</style>
```
Next.js 는 styled-jsx  라이브러리를 사용 = "CSS-in-JS" 

React 컴포넌트 내에서 CSS 코드를 작성할 수 있게 해주는 라이브러리로, 작성한 CSS style들은 scoped 된다. (scoped 표현은 다른 컴포넌트들에게 영향을 주지 않는 것으로, 선언댄 해당 컴포넌트에서만 적용)

(주석. styled-components로 재미를 많이 봤엇는데, babelrc 설정이 필요하다, 처음 셋팅때 염두해두고 , 사실 CSS코드를 그대로 사용해도 된다 측면에서 styeld-components와 유사한것 같다.)

기존대로 css파일을 별개로 사용할시에는 [name].module.css 형식으로 파일을 만들어 module화 시켜서 해당 컴포넌트에서 import 한 후 scopping.
(자세한 부분 : https://nextjs.org/learn/basics/assets-metadata-css/polishing-layout )

Next.js 기본 css extension 지원 : scss , sass, style-jsx

Global styles .전역 스타일 설정시에는. css파일을 프로젝트 폴더 내 아무곳이나 생성해도 된다. (이름에 제한도 없음)

단, import를 pages/_app.js 에서 해줘야한다(Only inside pages/_app.js ). 이 규칙만 지켜주고, Global(전역)으로 적용하고 싶은 CSS를 만든 CSS파일에 써주면된다.

+@ : [Styling tips](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips)
