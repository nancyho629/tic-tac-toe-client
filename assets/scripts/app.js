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
  $('.box').on('click', gameEvents.onClickedSquare)
  $('#game-stats').on('click', gameEvents.onGameStats)
  $('.game').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#game-stats').hide()
  $('#game-board').hide()
  $('.navbar').hide()
  $('.headingtop').show()
  $('.first-button').on('click', () => {
    $('.animated-icon1').toggleClass('open')
  })
  $('#sign-out').on('click', () => {
    $('.collapse').collapse('hide')
    $('.animated-icon1').toggleClass('open')
  })
})
