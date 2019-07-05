<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em; font-weight:900; color:white;" slot="text">
        Happiness is always with you.
      </div>
    </ImgBanner>
    <v-container>
      <!-- About Me -->
      <v-layout my-5>
        <v-flex xs12 sm8>
          <h2 class="mb-3 text-xs-center text-sm-left" style="font-size:4.5vw">
            About Me
          </h2>
          <p class="mb-3 text-xs-center text-sm-left" style="font-size:2.5vw">
            안녕하세요,
            <br />탁구를 좋아하는 프로그래머 박길준입니다. <br />좋은 분들과
            함께 프로젝트를 진행하게 되어서 기쁩니다. <br />앞으로 남은 기간도
            잘 부탁드리고 <br />모두가 원하는 결과를 얻을 수 있길 바라겠습니다.
          </p>
        </v-flex>
        <v-flex xs0 sm4 hidden-xs-only>
          <v-img :src="getImgUrl('profile.png')" aspect-ratio="1.5" />
        </v-flex>
      </v-layout>

      <!-- Portfolio -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="my-5 text-xs-center" style="font-size:4.5vw">Portfolio</h2>
          <PortfolioList></PortfolioList>
        </v-flex>
      </v-layout>

      <!-- Post -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="my-5 text-xs-center" style="font-size:4.5vw">Post</h2>
          <PostList :column="2"></PostList>
        </v-flex>
      </v-layout>

      <!-- Github -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="my-5 text-xs-center" style="font-size:4.5vw">Project</h2>
          <RepositoryList></RepositoryList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from "../components/ImgBanner";
import PortfolioList from "../components/PortfolioList";
import PostList from "../components/PostList";
import RepositoryList from "../components/RepositoryList";

export default {
  name: "HomePage",
  components: {
    ImgBanner,
    PortfolioList,
    PostList,
    RepositoryList
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    }
  }
};
</script>
