import { CanvasGroups } from './CanvasGroups'

export const loadImage = (url: string) => {
  return new Promise<HTMLImageElement>((resolve) => {
    const img = new Image()
    img.src = url
    img.onload = () => {
      resolve(img)
    }
  })
}

interface ImageBaseOptions {
  image: CanvasImageSource
  x: number
  y: number
}

interface ImageMaxOptions extends ImageBaseOptions {
  maxWidth?: number
  maxHeight?: number
}

interface ImageOptions extends ImageMaxOptions {
  imageX?: number
  imageY?: number
  imageWidth?: number
  ImageHeight?: number
}

export class CanvasImage extends CanvasGroups {
  image(ops: ImageOptions) {
    if (
      ops.imageX !== undefined &&
      ops.imageY !== undefined &&
      ops.imageWidth !== undefined &&
      ops.ImageHeight !== undefined &&
      ops.maxWidth !== undefined &&
      ops.maxHeight !== undefined
    ) {
      this.ctx.drawImage(
        ops.image,
        ops.imageX,
        ops.imageY,
        ops.imageWidth,
        ops.ImageHeight,
        ops.x,
        ops.y,
        ops.maxWidth,
        ops.maxHeight
      )
    } else if (ops.maxWidth !== undefined && ops.maxHeight !== undefined) {
      this.ctx.drawImage(ops.image, ops.x, ops.y, ops.maxWidth, ops.maxHeight)
    } else {
      this.ctx.drawImage(ops.image, ops.x, ops.y)
    }
  }
}
