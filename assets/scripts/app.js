'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('submit', authEvents.onResetGame)
  $('#game-board').hide()

/*  const boxes = document.getElementsbyClassName('box')
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].on('click', authEvents.onClickedSquare)
  } */

  $('#0').on('click', authEvents.onClickedSquare)
  $('#1').on('click', authEvents.onClickedSquare)
  $('#2').on('click', authEvents.onClickedSquare)
  $('#3').on('click', authEvents.onClickedSquare)
  $('#4').on('click', authEvents.onClickedSquare)
  $('#5').on('click', authEvents.onClickedSquare)
  $('#6').on('click', authEvents.onClickedSquare)
  $('#7').on('click', authEvents.onClickedSquare)
  $('#8').on('click', authEvents.onClickedSquare)
})
