import { CanvasWrapperOptions } from "./CanvasWrapper"
import { loadImage } from "./CanvasImage"
import { CanvasMouse } from "./CanvasMouse"

export class Vancas extends CanvasMouse {}
export { loadImage }

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
