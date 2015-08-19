var TicTacToe = { 
    
    game: [ // [ 3,3 ]

            [ $( '.row1.col1' ) ],  [ $( '.row1.col2' ) ],  [ $( '.row1.col3' ) ], // evaluates to [ [ x ] [ x ] [ x ] ]   // game[0] === [ x, x, x ] === player
            [ $( '.row2.col1' ) ],  [ $( '.row2.col2' ) ],  [ $( '.row2.col3' ) ], // evaluates to [ [ o ] [ '' ] [ '' ] ] // game[1] === [ x, x, x ] === player
            [ $( '.row3.col1' ) ],  [ $( '.row3.col2' ) ],  [ $( '.row3.col3' ) ]  // evaluates to [ [ x ] [ o ] [ x ] ]   // game[2] === [ x, x, x ] === player

          ],

                                                                                                                                                                                                            // diagonal is actually row n and col n one way only
                                                                                                                                                                                                            // row is actually row n
                                                                                                                                                                                                            // col is actually col n

                                                                                                                                                                                                            // use for boards of 3 to whatever

                                                                                                                                                                                                            // game over if game.length > 0 ?

                                                                                                                                                                                                            // if row* === player
                                                                                                                                                                                                            // if col* === player
                                                                                                                                                                                                            //
                                                                                                                                                                                                            // $("[id^=jander]")
                                                                                                                                                                                                            // To get those that end with "jander"

                                                                                                                                                                                                            // $("[id$=jander]")

                                                                                                                                                                                                            //    player: [ 'x', 'o' ],

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

    player: function ( player1, player2 ) {
          
          player1 = 'x';
          player2 = 'o';

    },

    resetIfGameOver: function ( ) {
      if ( counter > 9 || winner.length > 0 ) {

        // game over, reset
        $( '.square' ).removeClass( 'player1' );
        $( '.square' ).removeClass( 'player2' );
        $( '#message' ).removeClass( 'player1Color' );
        $( '#message' ).removeClass( 'player2Color' );
        $( '#message' ).removeClass( 'tieColor' );
        $( '.square' ).text( '' );
        $( '#message' ).text( '' );

        counter = 1;
        winner = '';
      }
    },
   

    calculateWinner: function ( ) { 

      if ( ( TicTacToe.game[0] === player || TicTacToe.game[1] === player || TicTacToe.game[2] === player ) || // win by row
        ( TicTacToe.game[0] === player || TicTacToe.game[1] === player || TicTacToe.game[2] === player ) //

       {

        player = winner;
        return winner;

      },

    
    calculateWinner: function ( ) {  //   $("[id^=jander]")

      
      if ( $( '.row1.player1' ).length === 3 || $( '.col1.player1' ).length === 3 || $( '.diag1.player1' ).length === 3 ) {
        winner = TicTacToe.player1;
      }

      if ( $( '.row1 .player2' ).length === 3 || $( '.col1.player2' ).length === 3 || $( '.diag1.player2' ).length === 3 ) {
        winner = TicTacToe.player2;
      }

     if ( winner.length === 0 && counter === 9 ) { // if counter === 9 and winner.length === 0 //
        winner = 'tie';
      }

    },

    winnerIs: function ( ) {

      if ( winner === TicTacToe.player1 ) { // replace with just player // this?
      // player1 || player2 || tie 

          // return winner or tie
          $( '#message' ).addClass( 'player1Color' );
          $( '#message' ).text( 'you win ' + winner );
          return winner;

        } else if ( winner === TicTacToe.player2 ) {
          $( '#message' ).addClass( 'player2Color' );
          $( '#message' ).text( 'you win ' + winner );
          return winner;

        } else {
          $( '#message' ).addClass( 'tieColor' );
          $( '#message' ).text( "it's a tie" );
          return 'tie';
      }
    },

    calculateWinnertry: function ( ) {
      
      if ( $( '.row1 .player1' ).length === 3 || $( '.col1.player1' ).length === 3 || $( '.diag1.player1' ).length === 3 ) {
        winner = TicTacToe.player1;
      }

      if ( $( '.row1 .player2' ).length === 3 || $( '.col1.player2' ).length === 3 || $( '.diag1.player2' ).length === 3 ) {
        winner = TicTacToe.player2;
      }

      if ( winner.length === 0 && counter === 9 && TicTacToe.player1 > TicTacToe.player2 ) { // if counter === 9 and winner.length === 0 //
        winner = 'tie';
      }

    },

    // player1 || player2 || tie 
//    winnerIs2: function ( ) {
//    if ( winner === TicTacToe.player1 || winner === TicTacToe.player2 || winner === ( '' ) && TicTacToe.player1 > TicTacToe.player2 ) {  // player1 || player2 || tie 
//      return winner || tie;
//    }
};

var counter = 1;
var winner = ""; // if x player 1 if o player2

$( document ).ready( function ( ) {

  $( '.square' ).on( 'click', function ( ) { 

    debugger;

    TicTacToe.resetIfGameOver();

    // find class square add class player 1
    // on game start, set counter to zero
    // if even, set class player 1, set text 1
    // else set class player 2, set text to 2

    if ( counter % 2 === 0 ) {

      $( this ).removeClass( 'player2' );
      $( this ).addClass( 'player1' );
      $( this ).text( TicTacToe.player1 );
      counter += 1;

    } else {

      $( this ).removeClass( 'player1' );
      $( this ).addClass( 'player2' );
      $( this ).text( TicTacToe.player2 );
      counter += 1;

    }

// debugger;
    
    TicTacToe.calculateWinner();

    TicTacToe.calculateWinnertry();   

  });
});







  
// 1 set up a grid - html / css
// 2 variables to store the game play results
// 3 if square is clicked, addClass and store the result in the object tictactoe
// 4 add a counter variable


// wins with three in a row, three in columns or diagonal
// if square is clicked add the x text and a color
// the next square click o and a color
// end the game on 3 in a row, display result


/*

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

*/
