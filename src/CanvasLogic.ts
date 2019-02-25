import { CanvasWrapper } from './CanvasWrapper'

/**
 * This class is used to handle the update and render process.
 */
export class CanvasLogic extends CanvasWrapper {
  /**
   * lastTime keeps track of the last update (timestamp).
   */
  private lastTime = 0

  /**
   * rafRef keeps track of the requestAnimationFrame id.
   */
  private rafRef = 0

  private running = false

  /**
   * Update is called before a render.
   * Override it to implement your own logic.
   * The delta is passed down, it's used to keep the updates sync with the framerate.
   * Exemple:
   * ```typescript
   * update(delta) {
   *  // `x` will be incremeted by 50 every second
   *  x += 50 * delta
   * }
   * ```
   */
  public update = (delta: number) => {}

  /**
   * Render is called after update.
   * Override it to implement your own logic.
   */
  public render = () => {}

  /**
   * Start the update and render loop.
   */
  public start() {
    this.running = true
    this.main()
  }

  /**
   * Stop the update & render loop.
   */
  public stop() {
    this.running = false
    cancelAnimationFrame(this.rafRef)
  }

  private main = () => {
    if (this.running) {
      if (this.lastTime === 0) {
        this.lastTime = Date.now()
      }
      const now = Date.now()
      const delta = (now - this.lastTime) / 1000.0

      this.update(delta)
      this.render()

      this.lastTime = now

      this.rafRef = requestAnimationFrame(this.main)
    }
  }
}
