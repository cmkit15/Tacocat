// Function to reverse user input
function reverse() {
    let userInput = document.getElementById('userInput').value;
    let userInputLower = userInput.toLowerCase();
    let palindrome = "";

    let errorMessage = "Your input cannot be blank!";
    if (userInput == "") {
        document.getElementsByClassName('error-message')[0].innerHTML = errorMessage;
    } else {
        for (let loop = userInputLower.length - 1; loop >= 0; loop--) {
            palindrome = palindrome += userInputLower.charAt(loop);
            if (palindrome == userInputLower) {
                document.getElementById('tacocatResults').innerHTML = `${palindrome} <br /> is a palindrome`;
            } else {
                document.getElementById('tacocatResults').innerHTML = `${palindrome} <br />Nope, do better next time!`;
            }
        }
    }
}

// Function to clear user input
function reset() {
    document.getElementsByClassName('error-message')[0].innerHTML = "";
    document.getElementById('userInput').value = "";
    document.getElementById('tacocatResults').innerHTML = "";
}
