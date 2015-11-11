var TicTacToe = { 
    
// 1. Board 3 x 3

    game: [

            [ $( '.row1.col1' ) ],  [ $( '.row1.col2' ) ],  [ $( '.row1.col3' ) ],    
            [ $( '.row2.col1' ) ],  [ $( '.row2.col2' ) ],  [ $( '.row2.col3' ) ],   
            [ $( '.row3.col1' ) ],  [ $( '.row3.col2' ) ],  [ $( '.row3.col3' ) ]  

          ],

    pieces: [ 'x', 'o' ],

    player1: 'x',
    player2: 'o',

// 3. Gameplay 3 x 3 ( requirements )
//    Click square to play
//    Add hover
//    Add random colours
//    Add some better text / layout

// 4. End of game - display text

// 5. End of game - three ways
//    Player1 wins
//    player2 wins
//    Tie

// 6. Work out the winner
//    if row classes === player, player wins 
//    if col classes === player, player wins
//    if diag1 classes === player, player wins
//    if diag2 classes === player, player wins

    isWinner: function ( ) {

      var playerOneWin = TicTacToe.player1 + TicTacToe.player1 + TicTacToe.player1;

      var playerTwoWin = TicTacToe.player2 + TicTacToe.player2 + TicTacToe.player2;

      // x is player one
      // o is player two
      if ( $( '.row1 .crossone' ).length === 3 || $( '.row2 .crossone' ).length === 3 || $( '.row3 .crossone' ).length === 3 || $( '.diag1 .crossone' ).length === 3 || $( '.diag2 .crossone' ).length === 3 || $('.col1 .crossone' ).length === 3 || $('.col2 .crossone' ).length === 3 || $('.col3 .crossone' ).length === 3 ) {  

        winner = TicTacToe.player1;
        $( '.message' ).addClass( 'player1Color' );
        $( '.message' ).text( 'you are the winner ' + winner );

      } else if ( $( '.row1 .circle' ).length === 3 || $( '.row2 .circle' ).length === 3 || $( '.row3 .circle' ).length === 3 || $( '.diag1 .circle' ).length === 3 || $( '.diag2 .circle' ).length === 3 || $('.col1 .circle' ).length === 3 || $('.col2 .circle' ).length === 3 || $('.col3 .circle' ).length === 3 ) {

        winner = TicTacToe.player2;
        $( '.message' ).addClass( 'player2Color' );
        $( '.message' ).text( 'you are the winner ' + winner );
      
      } else if ( winner.length === 0 && counter === 10 ) {

        winner = "";
        $( '.message' ).addClass( 'tieColor' );
        $( '.message' ).text( "it's a tie" );

      }

    },

// 7. Work out tie game
//    if counter is greater than 9 && winner.length < 1 ;

// 8. Activate reset to clear the board
//    return to grey, clear html div text, and message text
//    needs to clear class
//    .squares of  
//      .player1 
//      .player2
//      .message of
//      .player1 
//      .player2
//      .tieColor

    resetIfGameOver: function ( ) {
      if ( counter >= 10 || winner.length > 0 ) {

        // game over, reset
        $( '.square' ).removeClass( 'player1' );
        $( '.square' ).removeClass( 'player2' );
        $( '.message' ).removeClass( 'player1Color' );
        $( '.message' ).removeClass( 'player2Color' );
        $( '.message' ).removeClass( 'tieColor' );
        $( '.square' ).text( '' );
        $( '.message' ).text( '' );

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

    TicTacToe.resetIfGameOver( );

    // find class square add class player1
    // on game start, set counter to zero
    // if even, set class player1, set text 1
    // else set class player2, set text to 2

    if (! $(this).hasClass('circle') || $(this).hasClass('crossone')) {

      if ( counter % 2 === 0 ) {
        
          $( this ).removeClass( 'player2' );
          $( this ).addClass( 'player1' ); 
          $( this ).append('<div class="crossone"></div>').append('<div class="crosstwo"></div>');
        
          counter += 1;
        
      } else {
        $( this ).removeClass( 'player1' );
        $( this ).addClass( 'player2' );
        $( this ).append('<div class="circle"></div>');
        
        counter += 1;
      }
    }

    TicTacToe.isWinner( );

  });

});
