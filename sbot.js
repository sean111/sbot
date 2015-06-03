$('.footercenter').append( "<span style='color: #FFF'>SBOT!</span>" );
var player1 = null;
var player2 = null;
var p1 = null;
var p2 = null;

$('#betstatus').watch( {
    properties: "prop_innerHTML",
    callback: function( data, i ) {
        console.log( data.vals[i] );
        var text = data.vals[i];
        if( text == "Bets are OPEN!" ) {
            p1 = $('#player1').val();
            p2 = $('#player2').val();
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
    console.log( { p1: p1, p2: p2, winner: winner } );
    if( p1 != null && p2 != null ) {
        console.log( 'Firing Ajax Call!' );
        $.ajax( {
            url: 'http://sbot.seansspace.com/match/new/' + p1 + '/' + p2 + '/' + winner,
            error: function( xhr, status, error ) {
                console.error( { error: error, status: status } );
            }
        } );
    }
}
