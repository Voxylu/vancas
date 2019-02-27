import { CanvasLogic } from './CanvasLogic'

interface Strokable {
  stroke?: boolean
}

interface BasicElement extends Strokable {
  color?: string
  lineWidth?: number
}

interface BasicShape extends BasicElement {
  x: number
  y: number
}

interface Defaults {
  color: 'black'
  lineWidth: 1.0
  font: '10px Arial'
  align: 'start'
}

const DEFAULTS: Defaults = {
  color: 'black',
  lineWidth: 1.0,
  font: '10px Arial',
  align: 'start',
}

export class CanvasDrawers extends CanvasLogic {
  /**
   * Draw a line.
   */
  public line(
    ops: {
      x1: number
      y1: number
      x2: number
      y2: number
    } & BasicElement
  ) {
    this.ctx.moveTo(ops.x1, ops.y1)
    this.ctx.beginPath()
    this.ctx.lineWidth = ops.lineWidth || DEFAULTS.lineWidth
    this.ctx.lineTo(ops.x2, ops.y2)
    if (ops.stroke) {
      this.ctx.strokeStyle = ops.color || DEFAULTS.color
      this.ctx.stroke()
    } else {
      this.ctx.fillStyle = ops.color || DEFAULTS.color
      this.ctx.fill()
    }
    this.ctx.closePath()
  }

  /**
   * Draw a rectangle.
   */
  public rect(
    ops: {
      width: number
      height: number
    } & BasicShape
  ) {
    this.ctx.beginPath()
    this.ctx.lineWidth = ops.lineWidth || DEFAULTS.lineWidth
    this.ctx.rect(ops.x, ops.y, ops.width, ops.height)
    if (ops.stroke) {
      this.ctx.strokeStyle = ops.color || DEFAULTS.color
      this.ctx.stroke()
    } else {
      this.ctx.fillStyle = ops.color || DEFAULTS.color
      this.ctx.fill()
    }
    this.ctx.closePath()
  }

  /**
   * Draw a circle.
   */
  circle(
    ops: {
      radius: number
    } & BasicShape
  ) {
    this.ctx.beginPath()
    this.ctx.lineWidth = ops.lineWidth || DEFAULTS.lineWidth
    this.ctx.arc(ops.x, ops.y, ops.radius, 0, 2 * Math.PI)
    if (ops.stroke) {
      this.ctx.strokeStyle = ops.color || DEFAULTS.color
      this.ctx.stroke()
    } else {
      this.ctx.fillStyle = ops.color || DEFAULTS.color
      this.ctx.fill()
    }
    this.ctx.closePath()
  }

  /**
   * Set the background of the canvas to a color.
   */
  background(color: string) {
    this.rect({
      x: 0,
      y: 0,
      color,
      height: this.height,
      width: this.width,
    })
  }

  /**
   * Draw a text on the canvas.
   */
  text(
    ops: {
      text: string
      align?: 'center' | 'left' | 'right' | 'start' | 'end'
      font?: string
      maxWidth?: number
    } & BasicShape
  ) {
    this.ctx.font = ops.font || DEFAULTS.font
    this.ctx.textAlign = ops.align || DEFAULTS.align
    this.ctx.lineWidth = ops.lineWidth || DEFAULTS.lineWidth
    if (ops.stroke) {
      this.ctx.strokeStyle = ops.color || DEFAULTS.color
      this.ctx.strokeText(ops.text, ops.x, ops.y, ops.maxWidth)
    } else {
      this.ctx.fillStyle = ops.color || DEFAULTS.color
      this.ctx.fillText(ops.text, ops.x, ops.y, ops.maxWidth)
    }
  }

  /**
   * Clear the whole canvas.
   */
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
}
