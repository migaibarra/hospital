class GameTimer {
  constructor(startTime) {
    startTime = Math.floor(startTime);
    startTime = Math.max(startTime, 0);

    this.startTime = this.time = startTime;
    this.interval = null;
  }

  getTime() {
    return this.time;
  }

  start(onTick) {
    this.time = this.startTime;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.time -= 1;
      if (this.time === 0) {
        clearInterval(this.interval);
        this.interval = null;
      }
      onTick(this.time);
    }, 1000);
  }
}

// This pattern of adding a class to Window is **NOT** standard and not best-practice
// The standard way of doing so is ES2015 modules, using the export keyword
// Using exports will be covered in a later challenge
window.GameTimer = GameTimer;
