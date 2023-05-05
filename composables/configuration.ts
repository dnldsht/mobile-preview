import type { Device } from '~/params'
import { devices } from '~/params'

interface Configuration {
  src: string
  device: Device
  width: number
  height: number
  scale: number
}

export function useConfiguration() {
  const { query } = useRoute()

  const src = (query.src as string) ?? 'https://example.com' // 'https://nuxt.com'

  const defaultDevice = devices[0]

  const defaults = {
    src,
    device: defaultDevice,
    width: defaultDevice.width,
    height: defaultDevice.height,
    scale: 0,
  }

  return useState<Configuration>('config', () => defaults)
}
