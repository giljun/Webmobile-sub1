<template>
  <v-layout py-4 h-100>
    <v-flex row>
      <div class="caption">{{ formatedDate }}</div>
      <h2 class="color-333 headline font-weight-light">
        {{ title }}
      </h2>
      <p class="mb-1 color-666 font-weight-light subheading Post_Body">
        {{ body }}
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Post",
  props: {
    date: { type: Date },
    title: { type: String },
    body: { type: String }
  },
  computed: {
    formatedDate() {
      return `${this.date.getFullYear()}년 ${this.date.getMonth()}월 ${this.date.getDate()}일`;
    }
  }
};
</script>
<style>
.color-666 {
  color: #666;
}
.color-333 {
  color: #333;
}
.h-100 {
  height: 100%;
}
.Post_Body {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
  width: 95%;
}
.Post_Title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 85%;
}
</style>
