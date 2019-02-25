script('build')
  .execute(() => {
    removeDir('./dist/')
  })
  .run('tsc --module commonjs --outDir dist/cjs')
  .run('tsc --module esnext --outDir dist/es')
