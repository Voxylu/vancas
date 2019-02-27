script('build')
  .execute(() => {
    removeDir('./dist/')
  })
  .run('tsc --module commonjs --outDir dist/cjs')
  .run('tsc --module esnext --outDir dist/es')

script('test-playground').run(
  'parcel examples/test-playground/index.html --port 3000 --hmr-port 4000'
)

script('publish')
  .run('rs build')
  .run('git push origin/master')
  .run('npm publish')
