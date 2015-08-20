var TicTacToe = { 
    
// 1. Board 3 x 3
//    it needs work for multi board
//    needs rows and columns
//    need to be able to set a custom one for bonus

    game: [

            [ $( '.row1.col1' ) ],  [ $( '.row1.col2' ) ],  [ $( '.row1.col3' ) ],    // evaluates to [ [ x ] [ x ] [ x ] ]   // game[0] === [ x, x, x ] === player
            [ $( '.row2.col1' ) ],  [ $( '.row2.col2' ) ],  [ $( '.row2.col3' ) ],    // evaluates to [ [ o ] [ '' ] [ '' ] ] // game[1] === [ x, x, x ] === player
            [ $( '.row3.col1' ) ],  [ $( '.row3.col2' ) ],  [ $( '.row3.col3' ) ]     // evaluates to [ [ x ] [ o ] [ x ] ]   // game[2] === [ x, x, x ] === player

          ],

    pieces: [ 'x', 'o' ],

    player1: 'x',
    player2: 'o',

// 3. Gameplay 3 x 3 ( requirements )
//    Click square to play
//    Add hover
//    Add random colours
//    Add some better text / layout

// 4. End of game - display text / change colour
//    End of game should feel like a winner.

    winning: function ( ) {

      if ( winner === TicTacToe.player1 || winner === TicTacToe.player2 || ( winner.length === 0 && counter === 9 ) ) {  

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
          $( '#message' ).text( 'its a tie' );
          return 'tie';
      }
    },

// 5. End of game - three ways
//    Player1 wins
//    player2 wins
//    Tie

// 6. Work out the winner
//    if row* === player, player wins // return winner = player      
//    if col* === player, player wins // return winner = player1       // $( '.row1' ).text('x')     
//    if diag1 === player, player wins // return winner = player
//    if diag2 === player, player wins // return winner = player
//    return 'Player + wins'

    isWinner: function ( ) {

      console.log( $( ".row1" ).text( ), TicTacToe.player1+TicTacToe.player1+TicTacToe.player1 );

      var playerOneWin = TicTacToe.player1 + TicTacToe.player1 + TicTacToe.player1;

      var playerTwoWin = TicTacToe.player2 + TicTacToe.player2 + TicTacToe.player2;

      if ( $( '.row1' ).text() === playerOneWin || $( '.row2' ).text() === playerOneWin || $( '.row3' ).text() === playerOneWin ) { 
        console.log( "PLAYER ONE IS THE WINNER!" );
        
      } else if ( $( '.col1' ).text() === playerOneWin || $( '.col2' ).text() === playerOneWin || $( '.col3' ).text() === playerOneWin ) {
          console.log( "PLAYER ONE IS THE WINNER!" );

      } else if ( $( '.diag1' ).text() === playerOneWin || $('.diag2' ).text() === playerOneWin ) {
        console.log( "PLAYER ONE IS THE WINNER!" );

      } else if ( $( '.row1' ).text() === playerTwoWin || $( '.row2' ).text() === playerTwoWin || $( '.row3' ).text() === playerTwoWin ) {
        console.log( "PLAYER TWO IS THE WINNER" );
      
      } else if ( $ ( '.col1' ).text() === playerTwoWin || $( '.col2').text() === playerTwoWin || $( '.col3' ).text() === playerTwoWin ) {
        console.log( "PLAYER TWO IS THE WINNER" );
      
      } else if ( $( '.diag1' ).text() === playerTwoWin || $( '.diag2' ).text() === playerTwoWin ) {
        console.log( "PLAYER TWO IS WINNER" );
      
      } else {
        console.log( "IT'S A TIE" );
 //       TicTacToe.winning();
      }

    },

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
    }
};

var counter = 1;
var winner = ''; // if x player1 if o player2
var player1 = TicTacToe.player1;
var player2 = TicTacToe.player2; 

$( document ).ready( function ( ) {

  $( '.square' ).on( 'click', function ( ) { 

// debugger;

    // find class square add class player1
    // on game start, set counter to zero
    // if even, set class player1, set text 1
    // else set class player2, set text to 2

    if ( counter % 2 === 0 ) {

      $( this ).removeClass( 'player2' );
      $( this ).addClass( 'player1' );
      $( this ).text( TicTacToe.player2 );
      counter += 1;

    } else {

      $( this ).removeClass( 'player1' );
      $( this ).addClass( 'player2' );
      $( this ).text( TicTacToe.player1 );
      counter += 1;
    }

    TicTacToe.resetIfGameOver( );

//    TicTacToe.winning( );

    TicTacToe.isWinner( );

  });


// debugger;
    

});
