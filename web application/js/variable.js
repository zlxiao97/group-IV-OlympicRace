const FPS = 60;
const RUNNING_SECONDS = 10; // 游戏时间
const RUNWAYS_LENGTH = 5632; // 跑道长度，单位px
const OBSTACLE_COUNTS = 5; // 障碍物数量
const MIN_XPOS_OF_OBSTACLE = 150; // 障碍物的最小X轴偏移，单位px
const MAX_XPOS_OF_OBSTACLE = 4500; // 障碍物的最小X轴偏移，单位px
const SLOPE_HEIGHT = 134; // 坡的高度，单位px
const SLOPE_WIDTH = 240; // 坡的宽度，单位px
const SLOPE_TAN = SLOPE_HEIGHT / SLOPE_WIDTH;

const ONE_FRAME = 1000 / FPS; // 一帧对应毫秒数
const MILEAGE_PER_SECOND = RUNWAYS_LENGTH / RUNNING_SECONDS; //  X轴，每秒位移距离，单位px
const MILEAGE_PER_FAME = MILEAGE_PER_SECOND / FPS; // X轴，每帧位移距离，单位px

const SLOPE_X_POS = 4725; // 坡的起始X轴位置，单位px

// Runner的跑步动画素材
const runnerSrcs = [
  "imgs/runner_1.png",
  "imgs/runner_2.png",
  "imgs/runner_3.png",
  "imgs/runner_4.png",
];

// 火炬初始、点燃状态的图片资源
const pyreSrc = "imgs/pyre.svg";
const firePyreSrc = "imgs/pyre_fire.svg";
