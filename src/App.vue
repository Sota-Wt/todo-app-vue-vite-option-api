<script>
</script>

<template>
  <header>
    <v-card>
      <v-layout>
        <v-app-bar color="teal" prominent><v-toolbar-title>ViteApp</v-toolbar-title>
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="125" />
          <v-btn to="/">HOME</v-btn>
          <v-btn to="/todo"> TODO </v-btn>
          <v-btn to="/play-ground">PLAYGROUND</v-btn>
        </v-app-bar>
      </v-layout>
    </v-card>
  </header>
  <RouterView />
</template>
