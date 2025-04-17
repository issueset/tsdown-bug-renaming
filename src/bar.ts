import type { Shared } from './shared'

interface Bar {
  name: string
  shared: Shared
}

/**
 * Comment for bar
 */
export const bar: Bar = {
  name: 'bar',
  shared: {
    name: 'shared',
  },
}
