class RunWay {
  constructor(no) {
    this.no = no;
    this.obstacles = [];
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

  getObstacles() {
    return this.obstacles;
  }

  addObstacle(obstacle) {
    this.obstacles.push(obstacle);
  }

  getObstacleXBase() {
    const { obstacles } = this;
    const { length } = obstacles;
    return obstacles[length - 1].getX();
  }

  getRunwayNo() {
    return this.no;
  }

  calcRunnerXPosition(x) {
    return x;
  }

  calcRunnerYPosition(x) {
    if (x <= SLOPE_X_POS) return this.yPos;
    if (x > SLOPE_X_POS + SLOPE_WIDTH) return this.yPos + SLOPE_HEIGHT;
    return this.yPos + (x - SLOPE_X_POS) * SLOPE_TAN;
  }

  getRunnerSize() {
    return this.runnerSize;
  }
}
