import { createVancas } from '../../src'

const vancas = createVancas({ width: 500, height: 500 })

const root = document.getElementById('root')
if (root) {
  root.innerHTML = ''
  root.appendChild(vancas.canvasEl)
}

let rotation = 0

vancas.update = (delta) => {
  rotation += 90 * delta
}

vancas.render = () => {
  vancas.clear()
  vancas.background('grey')
  vancas.circle({
    x: vancas.width / 2,
    y: vancas.height / 2,
    color: 'blue',
    radius: 10,
    stroke: true,
  })
  vancas.rotationGroup(
    () => {
      vancas.text({
        text: 'Hey!',
        x: vancas.width / 2,
        y: vancas.height / 2,
        color: 'blue',
        align: 'center',
        font: '30px Arial',
      })
    },
    {
      x: vancas.width / 2,
      y: vancas.height / 2,
      rotation: rotation * (Math.PI / 180),
    }
  )
}

vancas.start()
