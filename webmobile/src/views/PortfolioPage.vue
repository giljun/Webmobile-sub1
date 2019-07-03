<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em;font-size:5.5vw;" slot="text">
        Portfolio
      </div>
    </ImgBanner>
    <v-container>
      <!-- Portfolio -->
      <v-layout>
        <v-flex xs12>
          <PortfolioList :limits="6" :load-more="true"></PortfolioList>
        </v-flex>
      </v-layout>

      <!-- add btn -->
      <v-card-text style="height: 100px; position: relative">
        <v-btn
          fixed
          dark
          fab
          bottom
          left
          color="pink"
          class="ma-4"
          to="/editor"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from "../components/ImgBanner";
import PortfolioList from "../components/PortfolioList";

export default {
  name: "PortfolioPage",
  components: {
    ImgBanner,
    PortfolioList
  }
};
</script>
