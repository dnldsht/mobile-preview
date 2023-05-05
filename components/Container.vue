<script setup>
const conf = useConfiguration()

const { innerWidth, innerHeight } = window

const attrs = computed(() => {
  const { width, height, scale } = conf.value
  const autoScale = Math.min(innerWidth / width, innerHeight / height) - 0.1
  const s = scale || autoScale

  return {
    src: conf.value.src,
    width: width * s,
    height: height * s,
  }
})
</script>

<template>
  <div class="d-flex justify-center pt-2">
    <v-card class="pa-2">
      <iframe
        v-bind="attrs"
        frameborder="0"
        border="0"
        cellspacing="0"
      />
    </v-card>
  </div>
</template>
