'use strict'

const store = require('../store')

const resetSuccess = function (data) {
  store.game = data.game
  $('#message').text(`New Game Has Started!`)
  $('#game-id').text(`Current Game ID is: ${store.game.id}`)
  $('#message').removeClass()
  $('#message').addClass('success animated bounceIn')
  $('.box').text('')
  $('#player-message').text('It\'s Player X\'s turn!')
  $('#already-message').text('')
  $('#game-board').show()
}

const resetFailure = function () {
  $('#message')
    .text('Game creation failed')
}

const gameUpdateSuccess = function () {
//  $('#message').text('Gameboard has been updated with the move!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const gameUpdateFailure = function () {
  $('#message')
    .text('Game was not updated.')
}

const gameStatsSuccess = function (games) {
  $('#already-message').text(`You've played ${games.games.length} games!`)
}

const gameStatsFailure = function () {
  $('#message')
    .text('Game stats were not retrieved.')
}

module.exports = {
  resetFailure,
  resetSuccess,
  gameUpdateFailure,
  gameUpdateSuccess,
  gameStatsSuccess,
  gameStatsFailure
}
