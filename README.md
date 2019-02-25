# Vancas

> A nice wrapper for the html canvas.

## Usage

For more examples look in the `examples` directory.

```typescript
// Import vancas
import { createVancas } from 'vancas'

// Create an instance
const vancas = createVancas({ width: 500, height: 500 })

// Insert the canvas in the DOM
document.body.appendChild(vancas.canvasEl)

// Object for the player position
const player = {
  x: 250,
  y: 250,
}

// Update is called before the render
vancas.update = (delta) => {
  // Multiplying by `delta` make you sure that x will be incremented by 10 every second
  player.x += 10 * delta
}

// Render is used to draw on the canvas
vancas.render = () => {
  vancas.clear()
  vancas.background('grey')
  vancas.circle({ x: player.x, y: player.y, radius: 10, color: 'red' })
}

// Start the main loop (update & render)
vancas.start()
```

## Api

W.I.P.
