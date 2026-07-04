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

function calculateSubscription() {

    var months = parseInt(document.getElementById("monthBox").value);
    var fee = parseFloat(document.getElementById("feeBox").value);

    if (isNaN(months) || isNaN(fee)) {
        document.getElementById("totalBox").value = "Please enter valid numbers.";
        return;
    }

    var total = months * fee;

    if (months >= 12) {
        total = total * 0.85;
    }

    document.getElementById("totalBox").value = "$" + total.toFixed(2);

}