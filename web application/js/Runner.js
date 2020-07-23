class Runner {
  constructor(game) {
    this.game = game; // 参与的游戏
    this.x = 0; // 已跑步数
    this.y = 3; // 所在的跑道号
    $(document).on("keydown", (e) => {
      const key = +(window.event ? e.keyCode : e.which);
      // ↑方向键
      if (key === 38) {
        this.changeRunWays(this.y - 1 > 0 ? this.y - 1 : 1);
      } // ↓方向键
      else if (key === 40) {
        this.changeRunWays(this.y + 1 < 4 ? this.y + 1 : 3);
      }
    });
  }

  /** 私有方法 */

  // 跑步动画
  _Run() {
    const img = $("#runner img");
    this.running = setInterval(() => {
      const lastNumber = img
        .attr("src")
        .split("")
        .filter((item) => Number.isInteger(+item))
        .join("");
      $("#runner img").attr("src", runnerSrcs[lastNumber & 3]);
    }, 10 * ONE_FRAME);
  }

  // 跑步位移
  _Move() {
    const { end: to } = this.game;
    const runner = $("#runner");
    this.moving = setInterval(() => {
      const runway = this.game[`runway${this.y}`];
      this.x = runway.calcRunnerXPosition(this.x + MILEAGE_PER_FAME);
      runner.css(
        "bottom",
        `${runway.calcRunnerYPosition(this.x + MILEAGE_PER_FAME)}px`
      );
      runner.css("left", `${this.x}px`);
      $(document).scrollLeft(this.x);
      if (this.x >= to) this.stop("success");
    }, ONE_FRAME);
  }

  // 更改图片大小
  _changeRunnerSize() {
    const size = this.game[`runway${this.y}`].getRunnerSize() * 100;
    $("#runner img").css("max-width", `${size}%`);
    $("#runner img").css("max-height", `${size}%`);
  }

  // 点燃圣火
  _fire() {
    const pyre = $("#pyre img");
    pyre.attr("src", firePyreSrc);
  }

  /** 公共方法 */

  running() {
    this._Run();
    this._Move();
  }

  stand() {
    $("#runner img").attr("src", runnerSrcs[1]);
  }

  stop(type) {
    clearInterval(this.running);
    clearInterval(this.moving);
    this.stand();
    this._fire();
    this.game.endGame(type);
  }

  changeRunWays(no) {
    this.y = no;
    this._changeRunnerSize();
  }

  jump() {}
}
