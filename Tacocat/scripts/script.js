// Function to reverse user input
function reverse() {
    let userInput = document.getElementById('userInput').value;
    let userInputLower = userInput.toLowerCase();
    let palindrome = "";

    let errorMessage = "Your input cannot be blank!";
    if (userInput == "") {
        document.getElementById('tacocatResults').innerHTML = "";
        document.getElementsByClassName('error-message')[0].innerHTML = errorMessage;
    } else {
        document.getElementsByClassName('error-message')[0].innerHTML = "";
        for (let i = userInputLower.length - 1; i >= 0; i--) {
            palindrome = palindrome += userInputLower.charAt(i);
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
