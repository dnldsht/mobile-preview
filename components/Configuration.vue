<script setup>
import { devices } from '~/params'

const scales = [
  { title: '50%', value: 0.5 },
  { title: '75%', value: 0.75 },
  { title: '100%', value: 1 },
  { title: '200%', value: 2 },
  { title: 'Auto', value: 0 },
]

const configuration = useConfiguration()

watch(() => configuration.value.device, changeDevice, { immediate: true })

function changeDevice(slug) {
  const device = devices.find(device => device.slug === slug)
  if (device) {
    configuration.value.width = device.width
    configuration.value.height = device.height
  }
}
</script>

<template>
  <div class="w-100">
    <v-text-field
      v-model.lazy="configuration.src"
      label="Website URL"
      type="url"
      autocomplete="off"
    />

    <div class="d-flex">
      <v-select
        v-model="configuration.device"
        class="mr-2"
        label="Device"
        item-value="slug"
        :items="devices"
      />

      <v-select
        v-model="configuration.scale"
        label="Scale"
        :items="scales"
      />
    </div>

    <div v-if="configuration.device?.custom" class="d-flex">
      <v-text-field
        v-model.lazy="configuration.width"
        label="Width"
        type="number"
        class="mr-2"
        autocomplete="off"
      />

      <v-text-field
        v-model.lazy="configuration.height"
        label="Height"
        type="number"
        autocomplete="off"
      />
    </div>

    <div class="text-caption text-center mt-4">
      Made with ❤️ by <a href="https://github.com/dnldsht" target="_blank">Donald Shtjefni</a>
    </div>
  </div>
</template>
