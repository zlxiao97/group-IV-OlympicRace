class Runner {
  constructor() {
    this.x = 0; // 已跑步数
    this.y = 3; // 所在的跑道号
    this.frame = 0; // 当前帧
  }

  running() {
    const runnerSrcs = [
      "imgs/runner_1.png",
      "imgs/runner_2.png",
      "imgs/runner_3.png",
      "imgs/runner_4.png"
    ];
    // 跑步动画
    this.timer = setInterval(() => {
      gsap.set("#runner img", { attr: { src: runnerSrcs[this.frame % 3] } });
      this.frame++;
    }, ONE_FRAME * 5);
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
  }

  changeRunWays() {}

  jump() {}
}
