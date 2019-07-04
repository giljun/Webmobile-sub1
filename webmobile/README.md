# WebMobile with Vue.js

## 프로젝트 개요

- Vue.js를 이용해 기기의 크기에 맞춰진 반응형 웹 사이트를 제작
- 스켈레톤 프로젝트 코드를 익히는 것을 목표로 과정을 수행
- Vue.js
  - 진입 장벽이 낮다
  - 유연하다
  - 성능이 우수
  - 유지 보수와 테스팅이 편리한 자바스크립트 프레임워크
  - 점진적인 프레임워크
  - 핵심 라이브러리와 주변 생태계를 제공
- Atom
  - Github에서 만든 에디터
  - 웹 언어를 사용하여 에디터를 커스터마이징 할 수 있다
  - 플러그인을 통한 추가 기능 설치 용이



## 프로젝트 목표

- 기본 HTML/CSS/ES6에 대한 이해
- 웹 프로젝트의 구성과 필요 기능 명세서 작성에 대한 이해
- 외부 프레임워크와 OPEN API 활용
- SPA의 구조 이해
- 반응형 웹 페이지의 제작



## 프로젝트 환경

- 개발 환경

  - NPM 설치

    - 공식 홈페이지 링크 (https://nodejs.org/ko/) 클릭 후 설치

  - Vue.js, Vue-cli 설치

    - 최소 요구사항으로 Node.js 4.x 이상과 Git이 설치된 상태에서 CMD 창을 열어 아래 커맨드를 수행

      ```bash
      npm install
      npm install -g yarn 
      npm install -g @vue/cli
      npm install vue
      npm install -g firebase-tools
      npm run serve
      ```

  - Atom 설치

    - http://atom.io/
    - 운영체제에 맞는 설치파일을 내려받아 설치

  - Atom Vue.js 플러그인 설치

    - Atom 실행 상태에서 [File] - [Settings] - [+ Install] language-vue [Package] 검색하여 [Install]

- 파일/디렉토리 구조

  - asset
    - 프로젝트에 필요한 정적 리소스가 위치한 디렉토리
  - components
    - 페이지 단위 컴포넌트에서 쓰이는 소규모 컴포넌트가 위치한 디렉토리
  - services
    - 프로젝트에 필요한 로직과 관련된 함수 js파일이 위치한 디렉토리
  - views
    - 페이지 단위의 컴포넌트가 위치한 디렉토리
  - router.js
    - 라우터 설정 관련 파일
  - store.js
    - vuex 파일
  - App.vue
    - 최상위 컴포넌트
  - main.js
    - 최상위 컴포넌트를 최초 호출하는 자바스크립트 파일

- 주요 코드 설명

  - index.html

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
        <title>ssafy</title>
      </head>
      <body>
        <noscript>
          <strong
            >We're sorry but ssafy doesn't work properly without JavaScript enabled.
            Please enable it to continue.</strong
          >
        </noscript>
        <div id="app"></div>
        <!-- built files will be auto injected -->
      </body>
    </html>
    ```

    - Application의 기본 HTML 파일로 Client가 접속했을 때 보이는 기본 레이아웃입니다.
    - app이라는 id를 가진 Vue 컴포넌트가 마운팅

  - main.js

    ```js
    import Vue from "vue";
    import Vuetify from "vuetify";
    import "vuetify/dist/vuetify.min.css";
    import VueSimplemde from "vue-simplemde";
    import "simplemde/dist/simplemde.min.css";
    import "font-awesome/css/font-awesome.min.css";
    
    import App from "./App.vue";
    import router from "./router";
    import store from "./store";
    import "./registerServiceWorker";
    
    // markdown editor
    import "tui-editor/dist/tui-editor.css";
    import "tui-editor/dist/tui-editor-contents.css";
    import "codemirror/lib/codemirror.css";
    import { Editor, Viewer } from "@toast-ui/vue-editor";
    
    // scroll to top
    import BackToTop from "vue-backtotop";
    
    // detect browser
    import browserDetect from "vue-browser-detect-plugin";
    
    // bookmark
    import VueBookmark from "vue-bookmark";
    
    Vue.component("editor", Editor);
    Vue.component("viewer", Viewer);
    
    Vue.config.productionTip = false;
    
    Vue.use(Vuetify, {
      iconfont: "fa",
      theme: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c"
      }
    });
    
    Vue.use(VueSimplemde);
    Vue.use(BackToTop);
    Vue.use(browserDetect);
    Vue.use(VueBookmark);
    
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
    
    ```

    - Vue 인스턴스를 생성하는 Javascript로 new Vue() 구문으로 생성자에 들어간 속성 값을 갖는 새로운 Vue 인스턴스를 생성합니다.
    - '#app'은 HTML에 마운팅하기 위한 태그를 지정하는 것으로써 컴포넌트에서 지정한 App 컴포넌트를 인스턴스로 생성하게 됩니다.

  - App.vue

    ```vue
    <template>
      <v-app>
        <Header />
        <v-content>
          <router-view />
        </v-content>
        <ScrollBtn />
        <Footer />
      </v-app>
    </template>
    
    <script>
    import store from "./store";
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import ScrollBtn from "./components/ScrollBtn";
    
    export default {
      name: "App",
      components: {
        Header,
        store,
        Footer,
        ScrollBtn
      },
      data() {
        return {
          browser: BrowserDetect
        };
      },
      beforeCreate() {
        if (browser != "Chrome") {
          alert("해당 사이트는 크롬에 최적화 되어 있습니다.");
        }
      }
    };
    </script>
    
    ```

    - App 컴포넌트의 구조를 정의한 Vue.js 파일로써 해당 컴포넌트의 인스턴스가 생성/호출된 위치에 App.vue가 렌더링 되어 보여집니다.



## 기능 명세

- Req. 1-1 Header, Footer 구현
  - 네비게이션 바 역할을 하는 헤더와 사이트의 메타 정보가 노출되는 푸터를 구현합니다.
- Req. 1-2 Header 영역에 블로그 제목 노출 구현
- Req. 1-3 스크롤시 헤더가 같이 움직이도록 구현
- Req. 1-4 메인 이미지 영역이 새로고침시 마다 변경 되도록 구현
  - unsplash random link 사용 : 특정 Collection 사진 랜덤 노출하여 랜덤 이미지를 구현합니다.
- Req. 1-5 반응형 웹 사이트 구현
  - 모바일 사이즈에서 Home 화면 About Me 이미지가 미노출되어야 한다.
  - 모바일 사이즈에서, 이미지 영역을 화면 사이즈로 조절
  - 모바일 사이즈에서 Home 화면의 About Me 텍스트 가운데 정렬이 되어야 한다.
  - 가로 사이즈에 따라 텍스트 사이즈가 자동 조절되도록 합니다.
- Req. 1-6 반응형 웹 사이트 구현
  - 모바일 사이즈에서, 4행 1열 노출로 변경합니다.
  - 태블릿 사이즈에서, 2행 2열 노출로 변경합니다.
- Req. 1-7 Portfolio 클릭시 페이지 이동을 구현
- Req. 1-8 PortfolioWriter 페이지를 구현_글 작성이 가능한 페이지를 제작
  - 포트폴리오를 작성할 수 있는 페이지의 ui를 구현한다.
  - 마크다운 에디터를 이용하여 내용작성 할 수 있도록 하여야한다.
- Req. 1-9 네비게이션 로고를 누르면 Home 화면으로 이동 구현
- Req. 1-10 모바일 사이즈에서 3단 바 네비게이션 아이콘 구현
  - 메뉴가 있는 사이드 바 노출, 이 때, 메뉴는 포스트, 포트폴리오, 로그인입니다.
- Req. 1-11 사이드 바의 메뉴(포스트, 포트폴리오, 로그인)를 클릭 시, 각 페이지로 이동 구현
- Req. 1-12 자신의 블로그 정보 커스터마이즈
  - 이미지 배너의 텍스트를 자신의 슬로건으로 변경
  - About Me를 본인의 자기소개 및 사진으로 변경
- Req. 1-13 favicon 변경 구현
  - 원하는 이미지를 활용하여 favicon을 커스터마이즈
- Req. 1-14 코드 레벨 네비게이션 영역을 Header 컴포넌트로 분리
- Req. 1-15 포트폴리오, 포스트 리스트에서 타이틀은 한 줄, 설명은 3, 4줄 표시로 구현
- Req. 1-16 git 레포지토리 이름이 개행되지 않도록 설정
- Req. 1-17 페이지 스크롤 시 페이지 최상단으로 이동 버튼 추가 구현
  - 페이지 최상단에서는 해당 버튼이 미노출되도록 설정합니다.
- Req. 1-18 즐겨찾기에 추가하기 버튼을 제작 및 포트폴리오 사이트를 즐겨찾기로 등록하는 기능 추가
- Req. 1-19 구글 크롬 외의 브라우저로 접속시 "해당 사이트는 크롬에 최적화 되어 있습니다."라는 메시지를 노출 구현