class Obstacle {
  constructor(no, x) {
    this.runWaysNo = no; // 所在跑道编号
    this.xPos = x; // X轴方向偏移
    switch (no) {
      case 1:
        this.width = 16; // 图片宽度
        this.height = 62; // 图片高度
        break;
      case 2:
        this.width = 22; // 图片宽度
        this.height = 68; // 图片高度
        break;
      default:
        this.width = 28; // 图片宽度
        this.height = 74; // 图片高度
    }
  }

  isRunnerHitted() {}
}
