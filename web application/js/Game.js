class Game {
  constructor() {
    this.end = 5120; // 奥运火炬前白色地面的X轴位置
    $("#startButton").on("click", () => {
      this.startGame();
      return false;
    });
    $("#restartButton").on("click", () => {
      this.startGame();
      return false;
    });
  }

  _init() {
    start.remove();
  }

  _generateObstacle() {
    new Array(OBSTACLE_COUNTS).fill({}).forEach((_, index) => {
      const x = Math.round(
        Math.random() * (MAX_XPOS_OF_OBSTACLE - MIN_XPOS_OF_OBSTACLE) +
          MIN_XPOS_OF_OBSTACLE
      );
      if (index < 3) {
        new Obstacle(x, 0).addTo(this[`runway${index + 1}`]);
      } else {
        const runwayNo = Math.round(Math.random() * 2 + 1);
        const runway = this[`runway${runwayNo}`];
        const xBase = runway.getXBase();
        new Obstacle(x - xBase, xBase).addTo(runway);
      }
    });
  }

  startGame() {
    this._init();
    this.runner = new Runner(this);
    this.runway1 = new RunWays(1);
    this.runway2 = new RunWays(2);
    this.runway3 = new RunWays(3);
    this._generateObstacle();
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
