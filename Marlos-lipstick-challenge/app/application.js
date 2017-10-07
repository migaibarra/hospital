/*global Game Player:true*/

$(document).ready(() => {
  const player1 = new Player();
  const player2 = new Player();
  const game = new Game(player1, player2);
  registerKeystrokes({game, player1, player2});
});

const registerKeystrokes = ({game, player1, player2}) => {
  const keypresses = {
    '1': {player: player1, command: 'rock'},
    '2': {player: player1, command: 'paper'},
    '3': {player: player1, command: 'scissors'},
    '7': {player: player2, command: 'rock'},
    '8': {player: player2, command: 'paper'},
    '9': {player: player2, command: 'scissors'},
  };

  $(document.body).on('keypress', (e) => {
    if (game.isInProgress()) {
      const keyData = keypresses[e.key];
      if (keyData) {
        keyData.player.play(keyData.command);
      }
    }
  });
};
