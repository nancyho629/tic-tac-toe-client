'use strict'

const api = require('./api')
const ui = require('./ui')
// function we have to require: getFormFields
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('sign up data is:', data)
  // make api call
  api.signUp(data)
  // handle success
    .then(ui.signUpSuccess)
  // handle failure
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('sign in data is:', data)
  // make api call
  api.signIn(data)
  // handle success
    .then(ui.signInSuccess)
  // handle failure
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // data = {passwords: {old:123, new:1234}}
  // make api call
  api.changePassword(data)
  // handle success
    .then(ui.changePasswordSuccess)
  // handle failure
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // make api call
  api.signOut()
  // handle success
    .then(ui.signOutSuccess)
  // handle failure
    .catch(ui.signOutFailure)
}

const onResetGame = function (event) {
  event.preventDefault()
  api.resetGame()
    .then(ui.resetSuccess)
    .catch(ui.resetFailure)
}

const onClickedSquare = function (event) {
  event.preventDefault()
  $(event.target).text('x')
  api.updateGame()
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onResetGame,
  onClickedSquare
}
