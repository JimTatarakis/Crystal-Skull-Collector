var playerScore = 0;
$('#playerScore').html(playerScore);
var winCount = 0;
$('#winCount').html(winCount);
var lossCount = 0;
$('#lossCount').html(lossCount);

// Generate a random score (19-120).
// Generate a random value for skulls.
function InitialVals() {
    $('#skull0', '#skull1', '#skull2', '#skull3').removeData('value');  //Removes Data from previous game(if applicable).
    $('#gameScore').html(Math.floor((Math.random() * 101) + 19));   //Gives random number for gameScore.
    $('#skull0').data('value', Math.floor((Math.random() * 11) + 1)); //Makes random value for a Skull.
    $('#skull1').data('value', Math.floor((Math.random() * 11) + 1)); //Makes random value for a Skull.
    $('#skull2').data('value', Math.floor((Math.random() * 11) + 1)); //Makes random value for a Skull.
    $('#skull3').data('value', Math.floor((Math.random() * 11) + 1)); //Makes random value for a Skull.
}

// On click add skull value to user score. 

// If user score matches game score, trigger win.

// If user score exceeds game score, trigger loss.
