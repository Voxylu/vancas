import { CanvasDrawers } from './CanvasDrawers'
import { CanvasWrapperOptions } from './CanvasWrapper'

export class Vancas extends CanvasDrawers {}

/**
 * Return a vancas instance.
 * Exemple:
 * ```typescript
 * const vancas = createVancas({ width: 500, height: 500 })
 *
 * document.body.appendChild(vancas.canvasEl)
 *
 * vancas.render = () => {
 *   vancas.clear()
 *   vancas.background('grey')
 * }
 *
 * vancas.start()
 * ```
 */
export const createVancas = (ops: CanvasWrapperOptions) => {
  return new CanvasDrawers(ops)
}
