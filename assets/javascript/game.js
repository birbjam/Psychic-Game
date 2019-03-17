var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;

var secretLetter = letters[Math.floor(Math.random() * letters.length)];
var userLetters = new Array();

console.log(secretLetter)



document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === secretLetter) {
        wins++;
    } else {
        guesses--;
    }

    if (guesses === 0) {
        losses++
    }


document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guesses;
document.getElementById('guessesSoFar').innerHTML = "Your guesses so far: " + userGuess;

}
