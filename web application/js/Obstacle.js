class Obstacle {
  constructor(x, xBase) {
    this.xPos = x + xBase; // X轴方向偏移
    this.dom = $("<span></span>")
      .addClass("obstacle")
      .css("margin-left", `${x}px`);
  }

  getX() {
    return this.xPos;
  }

  addTo(runway) {
    runway.addObstacle(this);
    $(`#runway${runway.getRunwayNo()}`).append(this.dom);
    return this;
  }

  isRunnerHitted() {}
}
