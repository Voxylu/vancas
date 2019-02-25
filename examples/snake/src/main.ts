import { createVancas } from 'vancas'
import { Snake, Direction } from './snake'
import { FoodGenerator } from './food'

// Create an instance of Vancas
const vancas = createVancas({ width: 500, height: 500 })

const root = document.getElementById('root')
if (root) {
  // Purely optional but convenient with the hmr.
  root.innerHTML = ''
  // Append the canvas to the root node
  root.appendChild(vancas.canvasEl)
}

// We get an instance of the FoodGenerator
const foodGenerator = new FoodGenerator(vancas.width, vancas.height)
// We spawn an initial food
foodGenerator.spawn()

// We create our snake
const snake = new Snake(vancas.width, vancas.height, foodGenerator)

// We overwrite the gameOver method to stop the game
snake.gameOver = () => {
  vancas.stop()
}

vancas.update = (delta) => {
  // We update the snake using the delta
  snake.update(delta)
}

vancas.render = () => {
  // Clear everything...
  vancas.clear()
  // Set a background...
  vancas.background('grey')

  // And draw the rest !
  // The snake:
  snake.draw(vancas)
  // The foods:
  foodGenerator.draw(vancas)
  // The score:
  vancas.ctx.fillStyle = 'black'
  vancas.ctx.font = '10px Arial'
  const text = `Score: ${foodGenerator.score}`
  vancas.ctx.fillText(text, 0, 10)
}

// We start the game
vancas.start()

// Change the direction of the snake using the keyboard
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      snake.direction = Direction.Up
      break
    case 'ArrowDown':
      snake.direction = Direction.Down
      break
    case 'ArrowLeft':
      snake.direction = Direction.Left
      break
    case 'ArrowRight':
      snake.direction = Direction.Right
      break
  }
})
