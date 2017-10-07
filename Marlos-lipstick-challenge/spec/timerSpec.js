/*global GameTimer:true*/

describe('GameTimer', () => {
  let onTick;
  let gameTimer;

  beforeEach(() => {
    jasmine.clock().install();
    onTick = jasmine.createSpy('onTick');
    gameTimer = new GameTimer(3);
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('has an initial time value of 3', () => {
    expect(gameTimer.getTime()).toBe(3);
  });

  it('sets the time to be 0 if the start time is a negative number', () => {
    gameTimer = new GameTimer(-1);
    expect(gameTimer.getTime()).toBe(0);
  });

  it('rounds down the start time to the nearest whole number', () => {
    gameTimer = new GameTimer(3.6);
    expect(gameTimer.getTime()).toBe(3);
  });

  describe('after calling start', () => {
    beforeEach(() => {
      gameTimer.start(onTick);
    });

    it('sets the timer to the initial time remaining', () => {
      expect(gameTimer.getTime()).toBe(3);
    });

    it('sets the time to one second less after the corresponding time passes', () => {
      jasmine.clock().tick(1001);
      expect(gameTimer.getTime()).toBe(2);
    });

    it('stops the time once it gets down to 0', () => {
      jasmine.clock().tick(4001);
      expect(gameTimer.getTime()).toBe(0);
    });

    it('calls onTick after one second', () => {
      jasmine.clock().tick(1001);
      expect(onTick).toHaveBeenCalled();
    });

    it('calls onTick 3 times when the timer expires', () => {
      jasmine.clock().tick(3001);
      expect(onTick.calls.count()).toBe(3);
    });

  });
});
