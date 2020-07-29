class Runner {
  constructor(game) {
    this.game = game; // 参与的游戏
    this.x = 0; // 已跑步数
    this.y = 3; // 所在的跑道号
    this.runner = $("#runner"); // dom
    (this.height = 0), // 当前跳跃高度
      $(document).on("keydown", (e) => {
        const key = +(window.event ? e.keyCode : e.which);
        // ↑方向键
        if (key === 38) {
          this.changeRunWays(this.y - 1 > 0 ? this.y - 1 : 1);
        } // ↓方向键
        else if (key === 40) {
          this.changeRunWays(this.y + 1 < 4 ? this.y + 1 : 3);
        } // 空格键
        else if (key === 32) {
          this._jump();
        }
      });
  }

  /** 私有方法 */

  // 跑步动画
  _Run() {
    const img = $("#runner img");
    this.running = setInterval(() => {
      const lastNumber = +img
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
    this.moving = setInterval(() => {
      const runway = this.game[`runway${this.y}`];
      this.x = runway.calcRunnerXPosition(this.x + MILEAGE_PER_FAME);
      this.runner.css(
        "bottom",
        `${runway.calcRunnerYPosition(this.x + MILEAGE_PER_FAME)}px`
      );
      this.runner.css("left", `${this.x}px`);
      $(document).scrollLeft(this.x);
      this._isHitObstacle();
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

  // 判断是否碰到障碍物
  _isHitObstacle() {
    const runway = this.game[`runway${this.y}`];
    const obstacles = runway.getObstacles();
    const runnerWidth = runway.getRunnerSize() * RUNNER_IMG_WIDTH;
    const { width: obstacleWidth, height: obstacleHeight } = OBSTACLES_WIDTH[
      this.y - 1
    ];
    const isInXRange = obstacles
      .filter((obstacle) => {
        const left = obstacle.getX() - runnerWidth;
        const right = obstacle.getX() + obstacleWidth;
        return this.x >= left && this.x <= right;
      })
      .reduce(() => true, false);
    if (isInXRange) {
      const jumpHeight = +this.runner.css("margin-bottom").split("px")[0];
      if (jumpHeight <= obstacleHeight) {
        this.stop("error");
      }
    }
  }

  // 跳跃
  _jump() {
    // 计算跳跃速度
    const { height: obstacleHeight } = OBSTACLES_WIDTH[this.y - 1];
    const targetHeight = obstacleHeight + GMAE_HARD_VALUE;
    const heightPerFrame = targetHeight / JUMP_HIGHEST_TIME / FPS;
    //空中无法跳跃
    const runLen = this.runner.css("left");
    const len = +runLen.split("px")[0];
    this.height = +this.runner.css("margin-bottom").split("px")[0];

    if (this.height <= 0 || this.height === "") {
      var count = 0;
      //终点之前跳跃有效
      if (len < 5120) {
        this.jump = setInterval(() => {
          if (count == 0) {
            this.height += heightPerFrame;
            this.runner.css("margin-bottom", `${this.height}px`);
            if (this.height >= targetHeight) {
              count = 1;
            }
          }

          if (count == 1) {
            this.height -= heightPerFrame;
            this.runner.css("margin-bottom", `${this.height}px`);
            if (this.height <= 0) {
              count = 2;
            }
          }

          if (count == 2) {
            clearInterval(this.jump);
          }
        }, ONE_FRAME);
      }
    }
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
    clearInterval(this.jump);
    this.stand();
    this._fire();
    this.game.endGame(type);
  }

  changeRunWays(no) {
    this.y = no;
    this._changeRunnerSize();
  }
}
