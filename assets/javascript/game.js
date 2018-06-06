//An array of possible choices i.e. alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Player statistics variables for wins, losses, #guesses and letters entered
var wins = 0;
var losses = 0;
var guesses = 9;
var letters = [];
var player = null;

window.alert("Welcome crazy people, are you ready to be a Psychic? How to play: Press the any given letters with lowercase, if your answer is equal to computer's guess then you are psychic and if it's not equal than better luck next time. Remember: you have 9 guesses only! Good luck!");

//Press a key to make a guess (player) and compare to computer
document.onkeyup = function (event) {
    var player = event.key.toLowerCase();
   // String.fromCharCode(event.keyCode).toLowerCase();
    
    var computer = alphabet[Math.floor(Math.random() * alphabet.length)];

    //push guess to letter array
    letters.push(player);
   
    //determine the result of player vs computer
    // if (event.keyCode < 65 || event.keyCode > 90) {
    //    alert("invalid entry");

    if (player === computer && guesses > 0) {
        wins++;
        alert("Good Job, you are a psychic!");
        guesses = 9;
        letters = [];

    } else if (player !== computer && guesses > 0) {
        guesses = guesses - 1;

    } else if (guesses === 0) {
        losses++;
        alert("You are not a psychic, you lost!");
        guesses = 9;    
        letters = [];
    }
      console.log(letters)

    //Placing the HTML into the game id
    var html = 
    "<h1>The Psychic Game</h1>" +
    "<p>Can you guess what letter I am thinking of ?</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Remaining Guesses: " + guesses + "</p>" +
    "<p>Guesses used: " + letters + "</p>";

    document.querySelector("#game").innerHTML = html;
} 



        