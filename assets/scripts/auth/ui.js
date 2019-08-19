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
  $('#message').text('Sign Up Failed. Please retry!')
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
  $('#hide').css('display', 'block')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.game').show()
  // $('#create-game').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#game-stats').show()
  $('.navbar').show()
  $('.headingtop').hide()
}

const signInFailure = function () {
  $('#message').text('Sign In Failed')
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
  $('#already-message').text('')
  $('#player-message').text('')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('.game').hide()
  $('#sign-out').hide()
  $('#game-stats').hide()
  $('#game-board').hide()
  $('.headingtop').show()
  $('.navbar').hide()
  $('#game-id').text(``)
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed')
  $('form').trigger('reset')
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
