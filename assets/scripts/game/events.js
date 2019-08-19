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
    $('#move-message').text('Game is over! Start a new game!')
  } else if ($(data.target).html() === 'o' || $(data.target).html() === 'x') {
    $('#move-message').text('There\'s already a move there!')
  } else {
    board.updateBoard(data)
    // console.log(store.game)
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
