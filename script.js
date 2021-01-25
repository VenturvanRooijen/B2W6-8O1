var check = document.getElementById('check')
var guessWord = document.getElementById("inputWord");
var guessC = document.getElementById("guessField");
var randomWord = words[Math.floor(Math.random()*words.length)];
var randomWordSplit = randomWord.split("");
console.log(randomWordSplit);
var guessWord;
var guessWordSplit;
var p1;

check.onclick = function() {
    WordCheck();
};

function WordCheck() {
guessWord = document.getElementById("inputWord").value;
guessWordSplit = guessWord.split("");
console.log(guessWordSplit);

lingoCheck();
};

function lingoCheck() {

    for(i=0; i<5; i++) {
    p1 = document.createElement("p1");
    p1.id = "Letter" + i;
    p1.className = "textBox"
    console.log(p1.id);
    p1.style.backgroundColor = "red";
    guessC.append(p1);
    if(guessWordSplit[i] == randomWordSplit[i]) {
        p1.innerText = randomWordSplit[i];
        p1.style.backgroundColor = "green"
    }
    else if(randomWordSplit.includes(guessWordSplit[i])) {
        p1.innerText = guessWordSplit[i];
        p1.style.backgroundColor = "yellow"
    }
    else {
        p1.innerText = guessWordSplit[i];
    }
    Letter0.innerText = randomWordSplit[0];
};
};



