// Import vancas
import { createVancas } from 'https://unpkg.com/vancas@1.0.4/dist/es/index.js'

// Create an instance
const vancas = createVancas({ width: 500, height: 500 })

// Insert the canvas in the DOM
document.body.appendChild(vancas.canvasEl)

// Object for the player position
const circlePos = {
  x: vancas.width,
  y: vancas.height / 2,
  dir: 1,
  speed: 100,
}

// Update the circle postion
vancas.update = (delta) => {
  if (circlePos.dir === 1) {
    if (circlePos.x > 0) {
      circlePos.x -= circlePos.speed * delta
    } else {
      circlePos.dir = 0
    }
  } else {
    if (circlePos.x < vancas.width) {
      circlePos.x += circlePos.speed * delta
    } else {
      circlePos.dir = 1
    }
  }
}

// Render is used to draw on the canvas
vancas.render = () => {
  vancas.clear()
  vancas.background('grey')
  vancas.circle({ x: circlePos.x, y: circlePos.y, radius: 10, color: 'red' })
}

// Start the main loop (update & render)
vancas.start()
