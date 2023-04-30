<template>
  <div>
    <v-text-field
      v-model.lazy="configuration.src"
      label="Insert url"
      type="url"
      autocomplete="off"
    />

  <v-select label="Device" :items="devices"/>
</div>
</template>
<script setup>
const configuration = useConfiguration()

import { devices } from "~/params";

</script>
