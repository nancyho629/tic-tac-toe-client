'use strict'

const store = require('./../store')

const gameBoard = ['', '', '', '', '', '', '', '', '']

const updateBoard = function (data) {
  const indexID = $(data.target).data('id')
  // console.log('The index is', indexID)
  store.index = indexID

  if ($(data.target).html() !== 'o' && $(data.target).html() !== 'x') {
    // console.log('store.player is updateboard', store.player)
    // console.log('event.target.id', indexID)
    if (store.player === 'x') {
      store.player = 'o'
      $(data.target).text('x')
    } else {
      store.player = 'x'
      $(data.target).text('o')
    }
  }
}

module.exports = {
  updateBoard
}
