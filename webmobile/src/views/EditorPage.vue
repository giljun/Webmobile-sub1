<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
    <v-layout wrap row>
      <v-flex>
        <editor v-model="editorText"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
