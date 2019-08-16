'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const board = require('./game-board')

const onResetGame = function (event) {
  event.preventDefault()
  store.player = 'x'
  api.resetGame(event)
    .then(ui.resetSuccess)
    .catch(ui.resetFailure)
}

const onClickedSquare = function (data) {
  event.preventDefault()
  // put index number of move into store.index since data expected is {"game": {"cell": {"index": 0,  "value": "x"  },  "over": false  }}
  if (store.game.over === true) {
    $('#already-message').text('Game is over!')
  } else {
    board.updateBoard(data)
    if (board.checkWinner()) {
      if (store.player === 'x') {
        $('#player-message').text('o has won!')
        store.game.over = true
      } else {
        $('#player-message').text('x has won!')
        store.game.over = true
      }
    }
  }
  api.updateGame()
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)
}

const onGameStats = function () {
  event.preventDefault()
  api.gameStats()
    .then(ui.gameStatsSuccess)
    .catch(ui.gameStatsFailure)
}
module.exports = {
  onResetGame,
  onClickedSquare,
  onGameStats
}
