'use strict'

const store = require('../store')

const resetSuccess = function (data) {
  store.game = data.game
  // console.log('The current game ID is(store.game.id): ', store.game.id)
  // console.log('The current player is (store.player)', store.player) // this successfully returns 'x'
  // console.log('Does this have a value? store.user: ', store.user)
  // console.log('did i store game data? (store.game) ', store.game)
  $('#message').text('New Game Has Started!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.box').text('')
  $('#player-message').text('It\'s Player X\'s turn')
  $('#already-message').text('')
  $('#game-board').show()
  console.log(store.game)
}

const resetFailure = function () {
  $('#message')
    .text('Game creation failed')
}

const gameUpdateSuccess = function () {
  // console.log('the index is ', store.index)
  // console.log('the player in update is', store.player)

  $('#message').text('Gameboard has been updated with the move!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const gameUpdateFailure = function () {
  $('#message')
    .text('Game was not updated.')
}

const gameStatsSuccess = function (games) {
  console.log('number of games', games)
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
