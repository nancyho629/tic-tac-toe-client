'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('submit', gameEvents.onResetGame)
  $('#game-board').hide()
  $('#create-game').hide()
  $('#sign-out').hide()
  $('.box').on('click', gameEvents.onClickedSquare)
  $('#game-stats').hide()
  $('#game-stats').on('click', gameEvents.onGameStats)
  // $('#1').on('click', gameEvents.onClickedSquare)
  // $('#2').on('click', gameEvents.onClickedSquare)
  // $('#3').on('click', gameEvents.onClickedSquare)
  // $('#4').on('click', gameEvents.onClickedSquare)
  // $('#5').on('click', gameEvents.onClickedSquare)
  // $('#6').on('click', gameEvents.onClickedSquare)
  // $('#7').on('click', gameEvents.onClickedSquare)
  // $('#8').on('click', gameEvents.onClickedSquare)
})
