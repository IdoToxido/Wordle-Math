var wordlist = require('./wordlist.json');
var word = random();
console.log(word);
function random() {
    return wordlist[Math.floor(Math.random() * wordlist.length)];
}

function selectWord() {

}

function CheckGuess() {

    var guess = document.getElementById("guess");
    for (var i = 0; i < 5; i++) {
        if (word[i] == guess[i]) {

        }
    }
}