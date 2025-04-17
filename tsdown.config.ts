import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    foo: 'src/foo.ts',
    bar: 'src/bar.ts',
    shared_renamed: 'src/shared.ts',
  },
  outDir: 'dist/output_tsdown/',
  format: ['esm'],
  clean: true,
  dts: true,
})
