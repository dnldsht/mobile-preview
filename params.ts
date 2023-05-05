export interface Device {
  title: string
  width: number
  height: number
  custom?: boolean
}

export const devices: Array<Device> = [
  {
    title: 'iPhone Pro',
    width: 390,
    height: 844,
  },
  {
    title: 'iPhone Pro Max',
    width: 428,
    height: 926,
  },
  {
    title: 'iPhone',
    width: 390,
    height: 844,
  },
  {
    title: 'iPhone mini',
    width: 360,
    height: 780,
  },
  {
    title: 'Pixel 5',
    width: 393,
    height: 851,
  },
  {
    custom: true,
    title: 'Custom',
    width: 393,
    height: 851,
  },
]
