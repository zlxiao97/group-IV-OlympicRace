class RunWays {
  constructor(no) {
    this.slopeXPos = 4725; // 坡的起始X轴位置，单位px
    switch (no) {
      case 1:
        this.yPos = 115; // Y轴方向偏移，单位px
        this.runnerSize = 0.6; // 相较于图片的大小比例
        break;
      case 2:
        this.yPos = 95;
        this.runnerSize = 0.8;
        break;
      default:
        this.yPos = 60;
        this.runnerSize = 1;
    }
  }

  calcRunnerPosition() {}

  getRunnerSize() {}
}
