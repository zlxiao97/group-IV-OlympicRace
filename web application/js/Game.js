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

  /**
   *
   * @param {type} 游戏结束的类型：1.success：成功到达终点；2.error：碰到障碍物
   */
  endGame(type = "success") {
    const endBox = $("#end");
    endBox.removeClass("hide");
    $(`#end .${type}`).removeClass("hide");
  }
}
