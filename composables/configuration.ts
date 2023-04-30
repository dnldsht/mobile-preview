
type Configuration = {
  src: string
  width: number
  height: number
}

export const useConfiguration = () => {
  
  const { query } = useRoute()

  const src =  (query.src as string) ?? 'https://nuxt.com'

  const defaults = {
    src,
    width: 390,
    height: 844,
  }

  return useState<Configuration>('config', () => defaults)
}