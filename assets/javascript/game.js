var playerScore = 0;
$('#playerScore').html(playerScore);
var winCount = 0;
$('#winCount').html(winCount);
var lossCount = 0;
$('#lossCount').html(lossCount);
var gameScore = 0;

// Generate a random score (19-120).
// Generate a random value for skulls.
function InitialVals() {
    $('#skull0', '#skull1', '#skull2', '#skull3').removeData('value');  //Removes Data from previous game(if applicable).
    playerScore = 0;
    $('#playerScore').html(playerScore);
    gameScore = Math.floor((Math.random() * 101) + 19);   //Gives random number for gameScore.
    $('#gameScore').html(gameScore);
    $('#skull0').attr('value', Math.floor((Math.random() * 11) + 1)); //Makes random value for a Skull.
    $('#skull1').attr('value', Math.floor((Math.random() * 11) + 1)); //Makes random value for a Skull.
    $('#skull2').attr('value', Math.floor((Math.random() * 11) + 1)); //Makes random value for a Skull.
    $('#skull3').attr('value', Math.floor((Math.random() * 11) + 1)); //Makes random value for a Skull.
}

InitialVals(); //Starts Game.

// On click add skull value to user score. 
$(document).on('click', '.skull',function () {
    var datavalue = parseInt($(this).attr('value'));
    playerScore = playerScore + datavalue;
    $('#playerScore').html(playerScore);
    // If user score exceeds game score, trigger loss.
    if(playerScore > gameScore ){
        lossCount++;
        $('#lossCount').html(lossCount);
        alert('You lose! Try again.');
        InitialVals();
    }
    // If user score matches game score, trigger win.
    else if(playerScore === gameScore){
        winCount++;
        $('#winCount').html(winCount);
        alert('You win! Go again?');
        InitialVals();
    }
})