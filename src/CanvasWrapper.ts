export interface CanvasWrapperOptions {
  width: number
  height: number
}

/**
 * This class is used as a wrapper around the HTMLCanvasElement.
 */
export class CanvasWrapper {
  /**
   * The inner html canvas element.
   */
  public canvasEl: HTMLCanvasElement
  /**
   * The context used to draw things on the canvas.
   */
  public ctx: CanvasRenderingContext2D

  private _width: number
  private _height: number

  constructor(ops: CanvasWrapperOptions) {
    this._width = ops.width
    this._height = ops.height
    this.canvasEl = document.createElement('canvas')
    this.canvasEl.width = this._width
    this.canvasEl.height = this._height
    this.ctx = this.canvasEl.getContext('2d') as CanvasRenderingContext2D
  }

  /**
   * The width of the canvas (internal not css size)
   */
  public get width() {
    return this._width
  }

  public set width(val: number) {
    this.canvasEl.width = val
    this._width = val
  }

  /**
   * The height of the canvas (internal not css size)
   */
  public get height() {
    return this._height
  }

  public set height(val: number) {
    this.canvasEl.height = val
    this._height = val
  }
}
