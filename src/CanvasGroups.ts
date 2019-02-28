import { CanvasDrawers } from './CanvasDrawers'

// interface GroupOptions {
//   /** The x coordinate of the center of the group */
//   x: number
//   /** The y coordinate of the center of the group */
//   y: number
// }

interface GroupFns {
  translate(ops: { x: number; y: number }): GroupFns
  /** The rotation is in radians */
  rotate(ops: { rotation: number }): GroupFns
  scale(ops: { x: number; y: number }): GroupFns
  render(): void
}

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

  private groupFn(instructions: (() => void)[], groupFn: () => void): GroupFns {
    const addInstruction = (instruction: () => void) =>
      this.groupFn([...instructions, instruction], groupFn)
    return {
      translate: (ops) => {
        return addInstruction(() => this.ctx.translate(ops.x, ops.y))
      },
      rotate: (ops) => {
        return addInstruction(() => this.ctx.rotate(ops.rotation))
      },
      scale: (ops) => {
        return addInstruction(() => this.ctx.scale(ops.x, ops.y))
      },
      render: () => {
        this.ctx.save()
        for (const instruction of instructions) {
          instruction()
        }
        groupFn()
        this.ctx.restore()
      },
    }
  }

  group(fn: () => void): GroupFns {
    return this.groupFn([], fn)
  }
}
