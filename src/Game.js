import GameObject from "./GameObject.js"
import InputHandler from "./InputHandler.js"
import Player from "./Player.js"
import Enemy from "./Enemy.js"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height

    this.keys = new Set()
    new InputHandler(this)

    this.debug = false

    this.player = new Player(this)

    this.gameObjects = []
    this.enemies = [];
    this.background = new Image();
    this.background.src = "./assets/Isbana_MG.png";
    this.trees = new Image();
    this.trees.src = "./assets/VintrigskogMG.png"
    for (let index = 0; index < 5; index++) {
      let enemy = new Enemy(this, Math.random() * this.width, Math.random() * this.height, 20, 20, "#f00", 100);
      this.enemies.push(enemy)

    }
  }
  update(deltaTime) {
    console.log(this.enemies)

    this.gameObjects.forEach(gameObject => {
      gameObject.update(deltaTime)
    })
    this.enemies.forEach(enemy => {
      enemy.update(deltaTime)
    })
    this.player.update(deltaTime)
  }

  draw(ctx) {

    ctx.drawImage(
      this.background,
      0,
      0,
      this.width,
      this.height,
    )
    ctx.drawImage(
      this.trees,
      0,
      0,
      this.width,
      this.height,
    )
    this.gameObjects.forEach(gameObject => {
      gameObject.draw(ctx)
    })

    this.enemies.forEach(enemy => {
      enemy.draw(ctx)
    })
    this.player.draw(ctx)
  }
}
