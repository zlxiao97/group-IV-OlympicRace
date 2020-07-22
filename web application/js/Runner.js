class Runner {
  constructor() {
    this.x = 0; // 已跑步数
    this.y = 3; // 所在的跑道号
  }

  running() {
    const runnerSrcs = [
      "imgs/runner_1.png",
      "imgs/runner_2.png",
      "imgs/runner_3.png",
      "imgs/runner_4.png",
    ];
    const runner = $("#runner");
    const img = $("#runner img");

    // 跑步动画
    this.running = setInterval(() => {
      const lastNumber = img
        .attr("src")
        .split("")
        .filter((item) => Number.isInteger(+item))
        .join("");
      $("#runner img").attr("src", runnerSrcs[lastNumber & 3]);
      this.x = +runner.css("left").split("px")[0];
      this.x += 10;
      runner.css("left", `${this.x}px`);
    }, ONE_FRAME * 10);
  }

  stop() {
    clearInterval(this.running);
  }

  changeRunWays() {}

  jump() {}
}
