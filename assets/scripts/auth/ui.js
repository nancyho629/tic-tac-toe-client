'use strict'

const store = require('../store')

// does this need anything passed in?
const signUpSuccess = function () {
  $('#message')
    .text('Sign Up Successful')
  $('#message').removeClass()
  // $('#message').className('success')
  $('#message').addClass('Success') // optional adds class for styling
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign Up Failure')
  $('#message').type()
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // handle storing user token, if it exists
  store.user = data.user
  $('#message')
    .text('Sign In Successful')
  $('#message').removeClass()
  // $('#message').className('success')
  $('#message').addClass('success') // optional adds class for styling
  console.log('signinsuccess ran. User is', store.user)
  $('#signed-in-user').text(store.user.email)
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#create-example').show()
  $('#hide').css('display', 'block')
  $('#game').show()
  $('change-password').show()
}

const signInFailure = function () {
  $('#message').text('Sign In Failure')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message')
    .text('Change Password Successful')
  $('#message').removeClass()
  // $('#message').className('success')
  $('#message').addClass('success') // optional adds class for styling
  console.log('change password success ran')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message')
    .text('Change password Failure')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.user = null
  $('#signed-in-user').text('')
  $('#message').text('Sign Out Successful')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#game').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed')
}

const resetSuccess = function () {
  $('#message').text('New Game Has Started!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const resetFailure = function () {
  $('#message')
    .text('Game creation failed')
}

const gameUpdateSuccess = function () {
  $('#message').text('Gameboard has been updated with the move!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const gameUpdateFailure = function () {
  $('#message')
    .text('Game board was not updated with the move.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess,
  resetFailure,
  resetSuccess,
  gameUpdateFailure,
  gameUpdateSuccess
}
