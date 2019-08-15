'use strict'

const store = require('./../store')

const updateBoard = function (data) {
  const indexID = $(data.target).data('id')
  // console.log('The index is', indexID)
  store.index = indexID
  store.game.cells[indexID] = store.player
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

  const gameBoardFill = store.game.cells
  if (gameBoardFill[0] === 'x' && gameBoardFill[1] === 'x' && gameBoardFill[2] === 'x') {
    console.log('player x is the winner')
  } else if (gameBoardFill[0] === 'x' && gameBoardFill[4] === 'x' && gameBoardFill[8] === 'x') {
    console.log('player x is the winner')
  } else if (gameBoardFill[1] === 'x' && gameBoardFill[4] === 'x' && gameBoardFill[7] === 'x') {
     console.log('player x is the winner')
  } else if (gameBoardFill[2] === 'x' && gameBoardFill[4] === 'x' && gameBoardFill[6] === 'x') {
     console.log('player x is the winner')
  } else if (gameBoardFill[3] === 'x' && gameBoardFill[4] === 'x' && gameBoardFill[5] === 'x') {
     console.log('player x is the winner')
  } else if (gameBoardFill[6] === 'x' && gameBoardFill[7] === 'x' && gameBoardFill[8] === 'x') {
       console.log('player x is the winner')
  } else if (gameBoardFill[0] === 'x' && gameBoardFill[3] === 'x' && gameBoardFill[6] === 'x') {
       console.log('player x is the winner')
  } else if (gameBoardFill[1] === 'x' && gameBoardFill[4] === 'x' && gameBoardFill[7] === 'x') {
       console.log('player x is the winner')
  } else if (gameBoardFill[2] === 'x' && gameBoardFill[5] === 'x' && gameBoardFill[8] === 'x') {
       console.log('player x is the winner')
  }  else {
      console.log('player o is the winner')
  }
}

module.exports = {
  updateBoard
}
