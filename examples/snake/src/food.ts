import { Square } from './snake'
import { random } from 'trucs'
import { Vancas } from 'vancas'

/**
 * This class will handle the food generation and score
 */
export class FoodGenerator {
  /**
   * Array in which the food are stored
   */
  public foods: Square[] = []
  /**
   * The size of the square
   */
  private squareWidth = 10

  /**
   * The score
   */
  public score = 0

  /**
   * @param width The width of the game
   * @param height The height of the game
   */
  constructor(private width: number, private height: number) {}

  /**
   * Generates a food at a random point
   */
  public spawn() {
    // Generates a random point in grid where the food width is 1 then multiply by its actual width
    const x = random(this.width / this.squareWidth, 0, true) * this.squareWidth
    const y = random(this.height / this.squareWidth, 0, true) * this.squareWidth
    this.foods.push(new Square(x, y, this.squareWidth, this.squareWidth, 'red'))
  }

  /**
   * Method to eat a cartain food
   */
  eat(foodId: string) {
    this.foods = this.foods.filter(({ id }) => foodId !== id)
    this.spawn()
    if (this.score === 5) {
      this.spawn()
    }
    this.score++
  }

  draw(vancas: Vancas) {
    for (const food of this.foods) {
      food.draw(vancas)
    }
  }
}
