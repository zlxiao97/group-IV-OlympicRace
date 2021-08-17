class Game {
  constructor() {
    $("#startButton").on("click", () => {
      this.startGame();
      return false;
    });
  }

  startGame() {
    start.remove();
    $(document).scrollLeft(0);
    this.runner = new Runner();
    this.runner.runOnRunway();
  }

  endGame() {}
}
