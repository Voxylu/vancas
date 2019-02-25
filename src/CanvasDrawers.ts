import { CanvasLogic } from './CanvasLogic'

const isStroke = (ops: Strokable) => ops.stroke === true

interface Strokable {
  stroke?: boolean
  fill?: boolean
}

interface BasicShape extends Strokable {
  x: number
  y: number
  color?: string
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
      color?: string
    } & Strokable
  ) {
    this.ctx.moveTo(ops.x1, ops.y1)
    this.ctx.beginPath()
    this.ctx.lineTo(ops.x2, ops.y2)
    if (isStroke(ops)) {
      this.ctx.strokeStyle = ops.color || 'black'
      this.ctx.stroke()
    } else {
      this.ctx.fillStyle = ops.color || 'balck'
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
    this.ctx.rect(ops.x, ops.y, ops.width, ops.height)
    if (isStroke(ops)) {
      this.ctx.strokeStyle = ops.color || 'black'
      this.ctx.stroke()
    } else {
      this.ctx.fillStyle = ops.color || 'black'
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
    this.ctx.arc(ops.x, ops.y, ops.radius, 0, 2 * Math.PI)
    if (isStroke(ops)) {
      this.ctx.strokeStyle = ops.color || 'black'
      this.ctx.stroke()
    } else {
      this.ctx.fillStyle = ops.color || 'black'
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
      fill: true,
      color,
      height: this.height,
      width: this.width,
    })
  }

  /**
   * Clear the whole canvas.
   */
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
}
