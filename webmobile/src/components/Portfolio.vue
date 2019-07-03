<template>
  <v-card>
    <v-img :src="imgSrc" height="200px"> </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline Portfolio_Title">
          {{ title }}
        </div>
        <span class="grey--text Portfolio_Body">{{ body }}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    date: { type: String },
    title: { type: String },
    body: { type: String },
    imgSrc: { type: String }
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.Portfolio_Title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 85%;
}
.Portfolio_Body {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em;
  width: 95%;
}
</style>
