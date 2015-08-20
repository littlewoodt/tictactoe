// 1. Board
//    it needs work for multi board
//    needs rows and columns
//    need to be able to set a custom one

// 2. Players
//    2. There are 2 players kid.
//    Choose player tokens
//    Set to 'o' and 'x' for now

// 3. Game 3 x 3 requirements
//    Click square to play
//    Add some cute hover
//    Add some better text / layout

// 4. End of game - display text / change colour
//    End of game should feel like a winner...

// 5. End of game - three ways
//    Player1 wins
//    player2 wins
//    Tie

// 6. Work out the winner
//    if row* === player, player wins // return winner = player      // $("[id$=jander]")
//    if col* === player, player wins // return winner = player
//    if diag1 === player, player wins // return winner = player
//    if diag2 === player, player wins // return winner = player
//    return 'Player + wins'

// 7. Work out tie game
//    if counter is greater than 9 && winner.length < 1 ;
//    return 'The game is a tie.'

// 8. Activate reset to clear the board TOUCHY touchy
//    return to grey, clear html div text, and message text
//    needs to clear class
//    .squares of  
//      .player1 
//      .player2
//    #message of
//      .player1 
//      .player2
//      .tieColor




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// 1 set up a grid - html / css
// 2 variables to store the game play results
// 3 if square is clicked, addClass and store the result in the object tictactoe
// 4 add a counter variable


// wins with three in a row, three in columns or diagonal
// if square is clicked add the x text and a color
// the next square click o and a color
// end the game on 3 in a row, display result




1. GAME ONE
Play on 3 x 3: 2 player
- switch turns
- show result ( tie || win )
- dynamic game allowing two players to complete
- readme

- Must :
- render a game board in browser
- visually display who won 
- show the draw
- kiss and dry
- online
- semantic markup html css


2. BONUS 
- These are for extra credit! Don't focus on these until you've hit the core requirements.

- Play multiple games
- Track wins with win counter
- Allow players to customize their tokens (X, O, name, picture, etc)
- Inventive style, hover effects, animations 
- Use LocalStorage to persist data locally ?
- custom board sizes: default is 3x3 but you could allow users to choose a larger board
- Create an AI opponent: teach Javascript to play an unbeatable game against you

