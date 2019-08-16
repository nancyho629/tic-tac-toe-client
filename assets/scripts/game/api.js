'use strict'
const config = require('../config')
const store = require('../store')

const resetGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const updateGame = function (data) {
  // console.log('stored info:', store)
  // console.log('store.game.id', store.game.id)
  // console.log('updategame store.index', store.index)
  // console.log('user token is', store.user.token)
  // console.log('player is ', store.player)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': store.index,
          'value': store.player
        },
        'over': store.game.over
      }
    }
  })
}

module.exports = {
  resetGame,
  updateGame
}
