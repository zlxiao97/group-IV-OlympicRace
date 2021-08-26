class Runner {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.x = 0; // 已跑步数
    this.y = 3; // 所在的跑道号
    this.frame = 0; // 当前帧
  }

  setRunWay() {
    gsap.set("#runner", {
      y: RunWays.data[this.y].yPos,
      scale: RunWays.data[this.y].runnerScale
    });
  }

  runOnRunway() {
    this.setRunWay();
    const runnerSrcs = [
      "imgs/runner_1.png",
      "imgs/runner_2.png",
      "imgs/runner_3.png",
      "imgs/runner_4.png"
    ];
    // 跑步动画 --- 人物动作
    if (!this.timer)
      this.timer = setInterval(() => {
        gsap.set("#runner img", { attr: { src: runnerSrcs[this.frame % 3] } });
        this.frame++;
      }, ONE_FRAME * 5);

    // 跑步动画 --- 移动人物
    gsap.to("#runner", {
      motionPath: {
        path: "#running-path",
        align: "#running-path",
        alignOrigin: [0.5, 1],
        autoRotate: false
      },
      duration: TOTAL_TIME,
      ease: "power1.in", // 越跑越快
      onComplete: () => {
        this.stop();
      },
      onUpdate: () => {
        const x = gsap.getProperty("#runner", "x");
        this.game.panels.forEach((panel) => {
          const runEvent = new CustomEvent("run", {
            detail: { x }
          });
          panel.dispatchEvent(runEvent);
        });
      }
    });

    // 跑步动画 --- 移动视角
    gsap.to(window, {
      delay: 1,
      scrollTo: { x: 4675, y: 0 },
      duration: TOTAL_TIME,
      ease: "power1.in"
    });
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
    $("#pyre img").attr("src", "imgs/pyre_fire.svg");
  }

  changeRunWays() {}

  jump() {}
}
