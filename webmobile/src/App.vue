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
