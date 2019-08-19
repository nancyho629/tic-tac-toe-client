# Tic Tac Toe Game

## Instructions
1. The game is played on a grid that's 3 squares by 3 squares.

2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.

3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.

4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

## List of Technologies Used
* HTML
* CSS
* JavaScript + jQuery
* Bootstrap

## Planning Process
1. Started with a general work flow with a focus on the API.
2. Created user authentication.
3. Moved onto Game UI and created a simple board, click handler to accept clicks, and display who's turn it is.
4. API round 1 focused on creating the game board and tracking the moves.
5. API round 2 focused on preventing users from overwriting moves already on the board, updating the game moves in the api, and updating the game board.
6. Worked on game engine to keep track of the player and add it to my JavaScript representation of the board.
7. Game logic for winner, draw, and displaying resulting condition.
8. Game UI round 2 involved adding messages for game logic of resulting condition and invalid move.
9. Get games.
10. Create documentation

## Future Iterations
* Improve styling
* Multiplayer
* When loading game stats, if the user has more than 50 games it takes a while to load so it's best to create a loading message.

## Wireframe & User Stories

  - As a user I can sign up.
  - As a user I can log in.
  - As a user, when I sign in the game board appears.
  - As a user, when I sign in, the sign in and sign up capapbility disappears.
  - As a user, when I am logged in I can start a new game/there is a new game.
  - As a user, when I start a new game I see an empty game board.
  - As a user, when I start a new game I should be player x.
  - As a user, when I start a following game I should now be player o.
  - As a user, when I sign out the game board is hidden.
  - As a user, when three Xs are on the board player x wins.
  - As a user, when the whole board is filled it is a drawer.
  - As a user, when the three Os are on the board player o wins.
  - As a user, when I click on an existing cell with a game piece it should not overwrite it.
  - As a user, when someone wins, I want to be alerted which player won.
  - As a user, when I click an empty cell as player x and x appears.
