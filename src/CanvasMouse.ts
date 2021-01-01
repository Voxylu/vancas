import { CanvasImage } from "./CanvasImage"

export class CanvasMouse extends CanvasImage {
  public mouse = {
    x: 0,
    y: 0,
    /** 0: no button, 1: left, 2: right  */
    button: 0,
    preventDefault: false,
    contextmenu: true,
  }

  initialize() {
    this.canvasEl.addEventListener("mousemove", this.mouseHandler)
    this.canvasEl.addEventListener("mouseup", this.mouseHandler)
    this.canvasEl.addEventListener("mousedown", this.mouseHandler)
    this.canvasEl.addEventListener("contextmenu", this.contextmenu)
  }

  deinitialize() {
    this.canvasEl.removeEventListener("mousemove", this.mouseHandler)
    this.canvasEl.removeEventListener("mouseup", this.mouseHandler)
    this.canvasEl.removeEventListener("mousedown", this.mouseHandler)
    this.canvasEl.removeEventListener("contextmenu", this.contextmenu)
  }

  start() {
    super.start()
    this.initialize()
  }

  stop() {
    super.stop()
    this.deinitialize()
  }

  private mouseHandler = (ev: MouseEvent) => {
    if (this.mouse.preventDefault) {
      ev.preventDefault()
    }
    this.mouse.x = ev.clientX
    this.mouse.y = ev.clientY
    this.mouse.button = ev.buttons
  }

  private contextmenu = (ev: MouseEvent) => {
    if (this.mouse.contextmenu === false) {
      ev.preventDefault()
    }
  }
}
