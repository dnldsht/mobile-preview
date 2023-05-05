<script setup lang="ts">
useHead({
  title: 'Mobile Previewer - See How Your Website Looks on Mobile Devices',
  meta: [
    { name: 'description', content: 'Mobile Previewer is a free online tool that allows you to preview any website on popular mobile devices such as iPhone, iPad, Android phones, and tablets. Simply enter the website URL and select the device you want to preview it on, and our tool will generate a high-fidelity preview of the website as it would appear on that device.' },
  ],
})
</script>

<template>
  <v-app theme="dark">
    <v-main class="app">
      <v-container>
        <v-row>
          <v-col cols="8" class="align-center">
            <Container />
          </v-col>
          <v-col cols="4" class="d-flex align-center">
            <Configuration />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.app {
  display: flex;
  align-items: center;
  max-height: 100dvh;
}
</style>
