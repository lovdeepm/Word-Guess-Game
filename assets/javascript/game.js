
var words = ["fullhouse", "stepbystep", "familymatters", "perfectstrangers", "boymeetsworld", "dinosaurs", "sabrina"]

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksandCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 6;

function Game() {

            randomWord = words[Math.floor(Math.random() * words.length)];

            lettersOfWord = randomWord.split("");

            blanks = lettersOfWord.length;

            for (var i = 0; i < blanks; i++) {
                blanksandCorrect.push("_");
            }

            document.getElementById("currentword").innerHTML = " " + blanksandCorrect.join(" ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksandCorrect)

}

function reset() {
    guessesRemaining = 6;
    wrongGuess = [];
    blanksandCorrect = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] === letter){
            letterInWord = true;
        }
    }

      if (letterInWord) {
          for (var i = 0; i < blanks; i++) {
              if ( randomWord[i]=== letter) {
                  blanksandCorrect[i] = letter;
              }
          }
      }
      else {
          wrongGuess.push(letter);
          guessesRemaining--;
      }
      console.log(blanksandCorrect);

}

function complete() {

    if (lettersOfWord.toString() === blanksandCorrect.toString()) {

        wins++;
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    }  else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("losstracker").innerHTML = " " + losses;

    }
    document.getElementById("currentword").innerHTML = " " + blanksandCorrect.join(" ")
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;

}

Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(guesses);

    complete();

    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = " " + wrongGuess.join(" ");
}