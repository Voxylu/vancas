import { CanvasDrawers } from './CanvasDrawers'
import { CanvasWrapperOptions } from './CanvasWrapper'
import { CanvasGroups } from './CanvasGroups'

export class Vancas extends CanvasGroups {}

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
  return new Vancas(ops)
}
