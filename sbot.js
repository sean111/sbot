$('.footercenter').append( "<span style='color: #FFF'>SBOT!</span>" );
var player1 = null;
var player2 = null;

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
        }
        else if( text.indexOf( "Team Blue" ) > 0 ) {
            postMatch( p1, p2, 2 );
        }
    }
} );

function postMatch( p1, p2, winner ) {
    //Make sure that the players were scraped before sending data to the server
    if( p1.length > 1 && p2.length> 2 ) {
        console.log( 'Player ' + winner + ' Wins!' );
    }
}