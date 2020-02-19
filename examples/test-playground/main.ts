import { createVancas } from "../../src"

const vancas = createVancas({ width: 500, height: 500 })

const root = document.getElementById("root")
if (root) {
  root.innerHTML = ""
  root.appendChild(vancas.canvasEl)
}

let rotation = 0

vancas.update = (delta) => {
  rotation += 90 * delta
}

vancas.render = () => {
  vancas.clear()

  const shaper = vancas.getShaper({ color: vancas.mouse.button === 1 ? "red" : "blue" })

  vancas.background("grey")
  shaper
    .start()
    .go(vancas.mouse.x, vancas.mouse.y)
    .line(100, 200)
    .line(200, 200)
    .line(200, 100)
    .done()

  vancas.line({
    x1: 0,
    y1: 0,
    x2: vancas.width,
    y2: vancas.height,
  })
  vancas.circle({
    x: vancas.width / 2,
    y: vancas.height / 2,
    color: "blue",
    radius: 10,
    stroke: true,
  })
  vancas
    .group(() => {
      vancas.text({
        text: "Hey!",
        x: vancas.width / 2,
        y: vancas.height / 2,
        color: "blue",
        align: "center",
        font: "30px Arial",
      })
    })
    .translate({ x: vancas.width / 2, y: vancas.height / 2 })
    .rotate({ rotation: rotation * (Math.PI / 180) })
    .translate({ x: -vancas.width / 2, y: -vancas.height / 2 })
    .render()
  // vancas.rotationGroup(
  //   () => {
  //     vancas.text({
  //       text: 'Hey!',
  //       x: vancas.width / 2,
  //       y: vancas.height / 2,
  //       color: 'blue',
  //       align: 'center',
  //       font: '30px Arial',
  //     })
  //   },
  //   {
  //     x: vancas.width / 2,
  //     y: vancas.height / 2,
  //     rotation: rotation * (Math.PI / 180),
  //   }
  // )
}

vancas.start()
