$('.footercenter').append( "<span style='color: #FFF'>SBOT!</span>" );
var player1 = null;
var player2 = null;
// betObserver = new MutationObserver( function( mutation ) {
//     console.log( mutation );
//     if( $('#betstatus').html() == "Bets are OPEN!") {
//         var p1 = $('#player1').val();
//         var p2 = $('#player2').val();
//         console.log( { player1: p1, player2: p2 } );
//     }
//     else {
//         //Need to check for winner
//     }
// } );

// config = {
//     attributes: true
// }

// betObserver.observe( $('#betstatus')[0], config );

$('#betstatus').watch( {
    properties: "prop_innerHTML",
    callback: function( data, i ) {
        console.log( data.vals[i] );
        var text = data.vals[i];
        if( text == "Bets are OPEN!" ) {
            var p1 = $('#player1').val();
            var p2 = $('#player2').val();
            console.log( { player1: p1, player2: p2 } );
        }
        else if( text.indexOf( "Team Red" ) > 0 ) {
            postMatch( p1, p2, 1 );
            console.log( "Player 1 Wins!" );
        }
        else if( text.indexOf( "Team Blue" ) > 0 ) {
            postMatch( p1, p2, 2 );
            console.log( "Player 2 Wins!" );
        }
    }
} );

function postMatch( p1, p2, winner ) {

}