'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message')
    .text('Sign Up Successful. Please log in!')
  $('#message').removeClass()
  $('#message').addClass('Success') // optional adds class for styling
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign Up Failure. Please retry!')
  $('#message').type()
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // handle storing user token, if it exists
  store.user = data.user
  $('#message').text('Sign In Successful')
  $('#message').removeClass()
  $('#message').addClass('success') // optional adds class for styling
  $('#signed-in-user').text(`Signed in user is ${store.user.email}`)
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#create-example').show()
  $('#hide').css('display', 'block')
  $('#game').show()
  $('#create-game').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#game-stats').show()
}

const signInFailure = function () {
  $('#message').text('Sign In Failure')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message')
    .text('Change Password Successful')
  $('#message').removeClass()
  $('#message').addClass('success') // optional adds class for styling
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
  $('#already-message').text('')
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess
}
