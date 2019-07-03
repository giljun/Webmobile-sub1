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
