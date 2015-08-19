var TicTacToe = { // do as rows and cols array?
    square1 : null,
    square2 : 'o',
    square3 : 'x',
    square4 : null,
    square5 : 'o',
    square6 : 'x',
    square7 : null,
    square8 : 'o',
    square9 : 'x',

    player1: 'x',
    player2: 'o',

  };

var counter = 1;
var winner = ""; // if x player 1 if o player2


$( document ).ready( function ( ) {
    
  $( '.square' ).on( 'click', function ( ) { 

    //debugger;
    if ( counter > 9 || winner.length > 0 ) {

      // game over, reset
      $( '.square' ).removeClass( 'player1' );
      $( '.square' ).removeClass( 'player2' );
      $( '.message' ).removeClass( 'player1Color' );
      $( '.message' ).removeClass( 'player2Color' );
      $( '.message' ).removeClass( 'tieColor' );
      $( '.square' ).text( '' );
      $( '#message' ).text( '' );
      counter = 1;
      winner = '';

    // return winner;
    }

    // find class square add class player 1
    // on game start, set counter to zero
    // if even, set class player 1, set text 1
    // else set class player 2, set text to 2

    if ( counter % 2 === 0 ) {
    // .row1 and .player1  .length === 3

      $( this ).removeClass( 'player2' );
      $( this ).addClass( 'player1' );
      $( this ).text( 'x' );
      counter += 1;

    } else {

      $( this ).removeClass( 'player1' );
      $( this ).addClass( 'player2' );
      $( this ).text( 'o' );
      counter += 1;

    }

// debugger;
    
    // player by diagonal
    // row1 col1 row2 col2 row3 col3
    // row3 col3 row2 col2 row1 col1
    
    // player 1 by diagonal
    
    if ( $( '.diag1.player1' ).length === 3 ) {
      winner = TicTacToe.player1;
    }
    
      if ( $( '.diag2.player1' ).length === 3 ) {
      winner = TicTacToe.player1;
    }
    
    // player 2 by diagonal
    
    if ( $( '.diag1.player2' ).length === 3 ) {
      winner = TicTacToe.player2;
    }
    
    if ( $( '.diag2.player2' ).length === 3 ) {
      winner = TicTacToe.player2;
    }
    
    // player 1 by rows
    
    if ( $( '.row1 .player1' ).length === 3 ) {
      winner = TicTacToe.player1;
    }
    
    if ( $( '.row2 .player1' ).length === 3 ) {
      winner = TicTacToe.player1;
    }
    
    if ( $( '.row3 .player1' ).length === 3 ) {
      winner = TicTacToe.player1;
    }
    
    // player 1 by cols
    
    if ( $( '.col1.player1' ).length === 3 ) {
      winner = TicTacToe.player1;
    }
    
    if ( $( '.col2.player1' ).length === 3 ) {
      winner = TicTacToe.player1;
    }
    
    if ( $( '.col3.player1' ).length === 3 ) {
      winner = TicTacToe.player1;
    }
    
    // player 2 by rows
    
    if ( $( '.row1 .player2' ).length === 3 ) {
      winner = TicTacToe.player2;
    }
    if ( $( '.row2 .player2' ).length === 3 ) {
      winner = TicTacToe.player2;
    }
    if ( $( '.row3 .player2' ).length === 3 ) {
      winner = TicTacToe.player2;
    }
    
    // player 2 by cols
    
    if ( $( '.col1.player2' ).length === 3 ) {
      winner = TicTacToe.player2;
    }
    
    if ( $( '.col2.player2' ).length === 3 ) {
      winner = TicTacToe.player2;
    }

    if ( $( '.col3.player2' ).length === 3 ) {
      winner = TicTacToe.player2;
    }


    // Winner


      if ( winner === TicTacToe.player1 ) {
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

  });
});

  
// 1 set up a grid - html / css
// 2 variables to store the game play results
// 3 if class square is clicked, addClass and store the result in the object tictactoe
// 4 add a counter variable

// wins with three in a row
// if square is clicked add the x and a color
// the next square click o and a color
// end the game on 3 in a row
