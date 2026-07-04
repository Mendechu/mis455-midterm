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


function sendMessage() {

    var name = document.getElementById("nameBox").value;
    var email = document.getElementById("emailBox").value;
    var message = document.getElementById("messageBox").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("msgBox").innerText = "Please fill in all the fields.";
        return;
    }

    var subject = "Website Inquiry from " + name;

    var body =
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message;

    window.location.href =
        "mailto:chowdhuryalvi07@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

    document.getElementById("msgBox").innerText =
        "Your email application should now open with your message ready to send.";

}