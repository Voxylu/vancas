import { CanvasDrawers } from './CanvasDrawers'

interface RotationGroupOption {
  /** The x coordinate of the rotation pivot */
  x: number
  /** The y coordinate of the rotation pivot */
  y: number
  /** The rotation in radian */
  rotation: number
}

export class CanvasGroups extends CanvasDrawers {
  rotationGroup(fn: () => void, ops: RotationGroupOption) {
    this.ctx.save()
    this.ctx.translate(ops.x, ops.y)
    this.ctx.rotate(ops.rotation)
    this.ctx.translate(-ops.x, -ops.y)
    fn()
    this.ctx.restore()
  }
}
