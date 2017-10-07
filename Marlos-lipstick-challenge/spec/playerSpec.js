/*global Player:true*/

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = new Player();
  });

  it('sets the current command when play() is called', () => {
    player.play('rock');
    expect(player.getCommand()).toBe('rock');
  });
});
