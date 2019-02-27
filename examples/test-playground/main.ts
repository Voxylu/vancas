import { createVancas } from '../../src'

const vancas = createVancas({ width: 500, height: 500 })

const root = document.getElementById('root')
if (root) {
  root.innerHTML = ''
  root.appendChild(vancas.canvasEl)
}

vancas.render = () => {
  vancas.clear()
  vancas.background('grey')
  vancas.text({
    text: 'Hey!',
    x: vancas.width / 2,
    y: vancas.height / 2,
    color: 'blue',
    align: 'center',
    font: '30px Arial',
  })
}

vancas.start()
