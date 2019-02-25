// Import vancas
import { createVancas } from 'https://unpkg.com/vancas@1.0.1/dist/es/index.js'

// Create an instance
const vancas = createVancas({ width: 500, height: 500 })

// Insert the canvas in the DOM
document.body.appendChild(vancas.canvasEl)

// Object for the player position
const player = {
  x: 250,
  y: 250,
  dx: 0,
  dy: 0,
}

const footLength = 5
// Move the player when an arrow is pressed
document.addEventListener('keydown', (e) => {
  console.log(e.key)
  switch (e.key) {
    case 'ArrowUp':
      player.y -= footLength
      break
    case 'ArrowDown':
      player.y += footLength
      break
    case 'ArrowLeft':
      player.x -= footLength
      break
    case 'ArrowRight':
      player.x += footLength
      break
  }
})

// Render is used to draw on the canvas
vancas.render = () => {
  vancas.clear()
  vancas.background('grey')
  vancas.circle({ x: player.x, y: player.y, radius: 10, color: 'red' })
}

// Start the main loop (update & render)
vancas.start()
