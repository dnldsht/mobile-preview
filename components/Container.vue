<template>
  <iframe v-bind="conf" frameborder="0" border="0" cellspacing="0" class="iframe" />
</template>
<script setup>
const conf = useConfiguration()
console.log(conf)

</script>
<style scoped>


</style>