<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon to="/"><v-icon>home</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>GILJUN PARK</v-toolbar-title>
      <!-- <a href="#" id="favorite" title="즐겨찾기 등록"
        >즐겨찾기<i class="large material-icons">bookmark</i>
      </a> -->
      <v-toolbar-side-icon id="favorite"
        ><v-icon>bookmark</v-icon></v-toolbar-side-icon
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/portfolio" flat>Portfolio</v-btn>
        <v-btn to="/post" flat>Post</v-btn>
        <v-btn to="/login" flat>Login</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="grey lighten-4"
      right
      temporary
    >
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="text-uppercase">{{
              link.text
            }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "dashboard", text: "Portfolio", route: "/portfolio" },
        { icon: "folder", text: "Post", route: "/post" }
      ]
    };
  }
};
</script>
