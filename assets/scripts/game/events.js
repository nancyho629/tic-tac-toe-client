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
  $('#message').text('')
  $('#move-message').text('')
  // put index number of move into store.index since data expected is {"game": {"cell": {"index": 0,  "value": "x"  },  "over": false  }}
  if (store.game.over === true) {
    $('#already-message').text('Game is over!')
  } else {
    board.updateBoard(data)
    if (board.checkWinner()) {
      console.log(store.game)
      if (store.player === 'x') {
        $('#player-message').text('O has won!')
        store.game.over = true
      } else {
        $('#player-message').text('X has won!')
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
