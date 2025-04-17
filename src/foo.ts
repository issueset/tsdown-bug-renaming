import type { Shared } from './shared'

interface Foo {
  name: string
  shared: Shared
}

export const foo: Foo = {
  name: 'foo',
  shared: {
    name: 'shared',
  },
}
