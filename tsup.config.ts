import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    foo: 'src/foo.ts',
    bar: 'src/bar.ts',
    shared_renamed: 'src/shared.ts',
  },
  format: ['esm'],
  outDir: 'dist/output_tsup/',
  clean: true,
  dts: true,
})
