class Game {
  constructor() {
    this.runner = null;
    this.panels = [];
    $("#startButton").on("click", () => {
      this.startGame();
      return false;
    });
  }

  startGame() {
    start.remove();
    $(document).scrollLeft(0);
    const panelIds = ["init", "amazon", "bahia", "parana", "saopaulo", "rio"];
    panelIds.forEach((panelId) => this.panels.push(new Panel(panelId)));
    this.runner = new Runner(this);
    this.runner.runOnRunway();
  }

  endGame() {}
}
