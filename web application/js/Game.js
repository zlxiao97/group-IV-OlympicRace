class Game {
  constructor() {
    this.end = 5120; // 奥运火炬前白色地面的X轴位置
    $("#startButton").on("click", () => {
      this.startGame();
      return false;
    });
  }

  startGame() {
    start.remove();
    this.runner = new Runner(this);
    this.runway1 = new RunWays(1);
    this.runway2 = new RunWays(2);
    this.runway3 = new RunWays(3);
    this.runner.running();
  }

  endGame() {}
}
