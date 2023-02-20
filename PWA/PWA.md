# **Progressive Web App (PWA)**

> _Progressive Web App 이란_ ?
>
> > Native app과 근접한 유저 경험을 할 수 있도록, service workers, manifests 등 여러 web-platform 특징 사용하는 Web App

- Features
  - Installable : App 처럼 설치 가능
  - Discoverable : 검색 엔진에서 노출
  - Linkable : URL을 통해서 공유가 가능
  - Network independent : Offline 혹은 불안한 네트워크 환경에서 작동
  - Progressively enhanced : 오래된 브라우저부터 최신 버전까지 지원
  - Re-engageable : 유저 알림 가능
  - Responsive Designed : 반응형 디자인으로 여러 기기에서 사용 가능
  - Secure : 유저와 앱, 서버간 연결 중 민감한 데이터에 대한 서드파티 접근에 대해 안전함

---

## 1. **Instalation** : Add to Home Screen (A2HS)

유저가 web app 을 설치할 수 있도록 하는 기능. "Shorcut" 기능을 한다.

    특징

    1. HTTPS 서비스상에서만 작동한다
    2. HTML head 안에 필요한 field들이 채워진 manifest 파일이 있어야한다.
    3. Device Home screen에서 노출될 아이콘이 필요하다.
    4. Chrome 에서는 service worker 가 요구된다.

```JSON
{
    "background_color" : Splash screen 에서 보여질 배경 색깔,
    "display" : App이 어떤식으로 diplay 될지 에 대한 값.
               "fullscreen" or "standalone",
    "icons" : 여러다른 위치에서 대표될 아이콘들. 작업표시줄, 앱 홈스크린, 등등
    "name" : 앱 Full name,
    "short_name" : Full name 을 표기하기 힘들 경우나 대신 표기할 짧은 name,
    "start_url" : Home screen 에서 app 을 키는 경우에 불러올 경로로 상대경로로 지정한다.
}
```

## 참고 자료

### [Install Prompt](https://web.dev/customize-install/)


## 2. Web App Manifest