<template>
  <div class="py-3">
    <v-layout>
      <v-flex xs8>
        <h2
          class="font-weight-regular"
          style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:140%; font-size:3.0vw"
        >
          {{ repos.path_with_namespace }}
        </h2>
        <p
          class="mb-1 grey--text text--darken-1 font-weight-light"
          style="font-size:2.0vw"
        >
          {{ repos.namespace.name }}
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import GitlabService from "@/services/GitlabService";

export default {
  name: "Repository",
  props: {
    repos: { type: null }
  },
  data() {
    return {
      stats: {}
    };
  },
  mounted() {
    this.drawStatGraph();
  },
  methods: {
    async drawStatGraph() {
      this.commits = await GitlabService.getCommits(this.repos.id);
    }
  }
};
</script>
