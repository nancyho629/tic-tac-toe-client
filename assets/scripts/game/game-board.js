'use strict'

const store = require('./../store')

const updateBoard = function (data) {
  const indexID = $(data.target).data('id')
  store.index = indexID
  store.game.cells[indexID] = store.player
  if ($(data.target).html() === 'o' || $(data.target).html() === 'x') {
    $('#move-message').text('There\'s already a move there!')
  } else {
    if ($(data.target).html() !== 'o' && $(data.target).html() !== 'x') {
      if (store.player === 'x') {
        store.player = 'o'
        $(data.target).text('x')
        $('#player-message').text('It\'s Player O\'s turn now!')
        $('#already-message').text('')
      } else if (store.player === 'o') {
        store.player = 'x'
        $(data.target).text('o')
        $('#player-message').text('It\'s Player X\'s turn now!')
        $('#already-message').text('')
      }
    }
  }
}

const winner = function (data) {
  const gameBoardFill = store.game.cells
  if ((gameBoardFill[0] === 'x' && gameBoardFill[1] === 'x' && gameBoardFill[2] === 'x') || (gameBoardFill[0] === 'o' && gameBoardFill[1] === 'o' && gameBoardFill[2] === 'o')) {
    return gameBoardFill[0]
  } else if ((gameBoardFill[0] === 'x' && gameBoardFill[4] === 'x' && gameBoardFill[8] === 'x') || (gameBoardFill[0] === 'o' && gameBoardFill[4] === 'o' && gameBoardFill[8] === 'o')) {
    return gameBoardFill[0]
  } else if ((gameBoardFill[1] === 'x' && gameBoardFill[4] === 'x' && gameBoardFill[7] === 'x') || (gameBoardFill[1] === 'o' && gameBoardFill[4] === 'o' && gameBoardFill[7] === 'o')) {
    return gameBoardFill[1]
  } else if ((gameBoardFill[2] === 'x' && gameBoardFill[4] === 'x' && gameBoardFill[6] === 'x') || (gameBoardFill[2] === 'o' && gameBoardFill[4] === 'o' && gameBoardFill[6] === 'o')) {
    return gameBoardFill[2]
  } else if ((gameBoardFill[3] === 'x' && gameBoardFill[4] === 'x' && gameBoardFill[5] === 'x') || (gameBoardFill[3] === 'o' && gameBoardFill[4] === 'o' && gameBoardFill[5] === 'o')) {
    return gameBoardFill[3]
  } else if ((gameBoardFill[6] === 'x' && gameBoardFill[7] === 'x' && gameBoardFill[8] === 'x') || (gameBoardFill[6] === 'o' && gameBoardFill[7] === 'o' && gameBoardFill[8] === 'o')) {
    return gameBoardFill[6]
  } else if ((gameBoardFill[0] === 'x' && gameBoardFill[3] === 'x' && gameBoardFill[6] === 'x') || (gameBoardFill[0] === 'o' && gameBoardFill[3] === 'o' && gameBoardFill[6] === 'o')) {
    return gameBoardFill[0]
  } else if ((gameBoardFill[1] === 'x' && gameBoardFill[4] === 'x' && gameBoardFill[7] === 'x') || (gameBoardFill[1] === 'o' && gameBoardFill[4] === 'o' && gameBoardFill[7] === 'o')) {
    return gameBoardFill[1]
  } else if ((gameBoardFill[2] === 'x' && gameBoardFill[5] === 'x' && gameBoardFill[8] === 'x') || (gameBoardFill[2] === 'o' && gameBoardFill[5] === 'o' && gameBoardFill[8] === 'o')) {
    return gameBoardFill[2]
  } else {
    if (!(gameBoardFill.includes(''))) {
      $('#player-message').text('It\'s a draw!!')
      return false
    }
  }
}

const checkWinner = function (data) {
  if (winner()) {
    return true
  } else {
    return false
  }
}

module.exports = {
  updateBoard,
  checkWinner
}
