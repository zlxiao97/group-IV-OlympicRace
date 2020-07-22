class Game {
  constructor() {
    $("#startButton").on("click", () => {
      this.startGame();
      return false;
    });
  }

  startGame() {
    start.remove();
    this.runner = new Runner();
    this.runner.running();
  }

  endGame() {}
}
