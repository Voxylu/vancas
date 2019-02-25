// Import vancas
import { createVancas } from 'https://unpkg.com/vancas@1.0.1/dist/es/index.js'

// Create an instance
const vancas = createVancas({ width: 500, height: 500 })

// Insert the canvas in the DOM
document.body.appendChild(vancas.canvasEl)

// Object for the player position
const circlePos = {
  x: 250,
  y: 250,
}

// Update the circle postion
vancas.update = (delta) => {
  if (circlePos.x > 0) {
    circlePos.x -= 10 * delta
  } else {
    circlePos.x = 500
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
