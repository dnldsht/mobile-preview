import { defaultDevice, defaultUrl, devices } from '~/params'

interface Configuration {
  src: string
  device: string
  width: number
  height: number
  scale: number
}

function getConfiguration(): Configuration {
  const { query } = useRoute()

  const getString = (key: string, defaultValue: string) => {
    const value = query[key] as string
    return value ?? defaultValue
  }

  const getNumber = (key: string, defaultValue: number) => {
    const s = getString(key, '')
    if (s)
      return Number(s)
    return defaultValue
  }

  const slug = getString('device', defaultDevice.slug)
  const device = devices.find(d => d.slug === slug) ?? defaultDevice

  return {
    src: getString('src', defaultUrl),
    device: device.slug,
    width: getNumber('width', device.width),
    height: getNumber('height', device.height),
    scale: getNumber('scale', 0),
  }
}

function serializeConfiguration(c: Configuration) {
  const deviceDimensions = c.device === 'custom' ? { with: c.width, height: c.height } : {}

  return {
    src: c.src,
    device: c.device,
    scale: c.scale,
    ...deviceDimensions,
  }
}

export function useConfiguration() {
  const res = useState<Configuration>('config', () => getConfiguration())

  watch(res.value, () => {
    const { replace } = useRouter()
    replace({ query: serializeConfiguration(res.value) })
  }, { immediate: true })

  return res
}
