import { Vancas } from 'vancas'
import { FoodGenerator } from './food'
import { random } from 'trucs'

/**
 * A Square represent either a food or a part of the snake
 */
export class Square {
  /**
   * The id is randomly generated when instanciating a square.
   */
  public id: string

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string
  ) {
    this.id = String(random(false))
  }

  draw(vancas: Vancas) {
    // Green square
    vancas.rect(this)
    // With black borders
    vancas.rect({ ...this, stroke: true, color: 'black' })
  }

  collide(other: Square) {
    const collideInX =
      this.x < other.x + other.width && this.x + this.width > other.x
    const collideInY =
      this.y < other.y + other.height && this.y + this.height > other.y

    return collideInX && collideInY
  }

  /**
   * @param width The width of the game
   * @param heith The height of the game
   */
  isOutside(width: number, height: number) {
    const outsideInX = this.x < 0 || this.x + this.width > width
    const outsiteinY = this.y < 0 || this.y + this.height > height
    return outsideInX || outsiteinY
  }
}

export enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Right = 'RIGHT',
  Left = 'LEFT',
}

export class Snake {
  private squares: Square[]
  /**
   * The size of the 'parts' of the snake
   */
  private squareWidth = 10

  /**
   * By default start to go down
   */
  public direction = Direction.Down

  /**
   * Sum of the deltas over time.
   * Here it's use like an interval: every time it's > 0.5 do something
   */
  private sumDelta = 0

  /**
   * @param width The width of the game
   * @param heith The height of the game
   * @param foodGenerator The 'global' foodGenerator
   */
  constructor(
    private width: number,
    private heith: number,
    private foodGenerator: FoodGenerator
  ) {
    this.squares = [
      new Square(0, 20, this.squareWidth, this.squareWidth, 'green'),
      new Square(0, 10, this.squareWidth, this.squareWidth, 'green'),
      new Square(0, 0, this.squareWidth, this.squareWidth, 'green'),
    ]
  }

  /**
   * Overwrote it the implement the GameOver
   */
  public gameOver = () => {}

  /**
   * Here the process is to create a new updated head and remove the last part unless we eat a food
   */
  public update(delta: number) {
    this.sumDelta += delta
    // This makes the actual 'update' every 0.25 seconds
    if (this.sumDelta > 0.25) {
      let dx = 0
      let dy = 0

      switch (this.direction) {
        case Direction.Down:
          dy = this.squareWidth
          break
        case Direction.Up:
          dy = -this.squareWidth
          break
        case Direction.Left:
          dx = -this.squareWidth
          break
        case Direction.Right:
          dx = this.squareWidth
          break
      }

      // Create a new head with updated position
      const head = new Square(
        this.squares[0].x + dx,
        this.squares[0].y + dy,
        this.squareWidth,
        this.squareWidth,
        'green'
      )

      let hasEat = false

      // Test if the snake is going outside
      if (head.isOutside(this.width, this.heith)) {
        this.gameOver()
      }

      // This test if the snake is'nt eating his own tail
      for (const square of this.squares) {
        if (head.collide(square)) {
          this.gameOver()
        }
      }

      // Test if the head is eating any of the foods
      for (const food of this.foodGenerator.foods) {
        if (head.collide(food)) {
          this.foodGenerator.eat(food.id)
          hasEat = true
        }
      }

      // Add the head to the start of the parts
      this.squares.unshift(head)

      // Remove the 'old' part if the snake didn't eat
      if (false === hasEat) {
        this.squares.pop()
      }

      // Reset the sum of deltas
      this.sumDelta = 0
    }
  }

  /**
   * This draws every parts (square) of the snake
   */
  public draw(vancas: Vancas) {
    for (const square of this.squares) {
      square.draw(vancas)
    }
  }
}
