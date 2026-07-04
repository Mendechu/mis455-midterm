function tryLuck() {

    var guess = parseInt(document.getElementById("guessBox").value);

    if (guess === 7 || guess === 9 || guess === 13 || guess === 21 || guess === 42) {
        document.getElementById("luckResult").innerText =
        "Congrats! " + guess + " is a lucky number. You win a free consultation!";
    }
    else {
        document.getElementById("luckResult").innerText =
        "Sorry, " + guess + " is not a lucky number. Try again!";
    }

}