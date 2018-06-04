//An array of possible choices i.e. alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Player statistics variables for wins, losses, #guesses and letters entered
var wins = 0;
var losses = 0;
var guesses = 9;
var letters = [];

//Press a key to make a guess (player) and compare to computer
document.onkeyup = function (event) {
    var player = event.key.toLowerCase();
    var computer = alphabet[Math.floor(Math.random()) * alphabet.length];

    //push guess to letter array
    letters.push(player);

    //determine the result of player vs computer
    if (player === computer && guesses > 0) {
        wins++;
        alert("You've guesses correctly!");
        guesses = 9;
        letters = [];
    }
}