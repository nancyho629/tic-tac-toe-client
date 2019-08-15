'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onResetGame = function (event) {
  event.preventDefault()
  store.player = 'x'
  api.resetGame(event)
    .then(ui.resetSuccess)
    .catch(ui.resetFailure)
}

const onClickedSquare = function (event) {
  event.preventDefault()
  store.index = $(event.target).data('id')
  // const info = board.updateBoard(event)
  // console.log('onclick index', store.index)
  console.log('api player', store.player)
  console.log('stored info (onclick):', store)
  api.updateGame()
    .then(ui.gameUpdateSuccess(event))
    .catch(ui.gameUpdateFailure)
}

module.exports = {
  onResetGame,
  onClickedSquare
}
