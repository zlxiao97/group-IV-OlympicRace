const FPS = 60;
const RUNNING_SECONDS = 10;
const RUNWAYS_LENGTH = 5632;
const SLOPE_HEIGHT = 134;
const SLOPE_WIDTH = 240;
const SLOPE_TAN = SLOPE_HEIGHT / SLOPE_WIDTH;

const ONE_FRAME = 1000 / FPS;
const MILEAGE_PER_SECOND = RUNWAYS_LENGTH / RUNNING_SECONDS;
const MILEAGE_PER_FAME = MILEAGE_PER_SECOND / FPS;

const runnerSrcs = [
  "imgs/runner_1.png",
  "imgs/runner_2.png",
  "imgs/runner_3.png",
  "imgs/runner_4.png",
];

const pyreSrc = "imgs/pyre.svg";
const firePyreSrc = "imgs/pyre_fire.svg";
