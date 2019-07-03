<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
    <v-layout wrap row>
      <v-text-field
        label="Title"
        v-model="title"
        prepend-icon="folder"
      ></v-text-field>
    </v-layout>
    <v-layout wrap row>
      <v-flex>
        <editor v-model="editorText" />
      </v-flex>
    </v-layout>
    <v-layout wrap row>
      <v-btn flat class="success mx-0 mt-3">Add Portfolio</v-btn>
    </v-layout>
  </v-container>
</template>
