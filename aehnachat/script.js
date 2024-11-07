const fs = require('fs');
const setuser = document.querySelector("#senduser");
const sendbtn = document.querySelector("#send");
const tb = document.getElementsByClassName("chatbox")[0];
const userdisplay = document.getElementById("userdisplay");
const user = document.getElementById("user");

// Display the username when the "User Submit" button is clicked
setuser.addEventListener('click', () => {
    const username = user.value;
    if (username) {
        userdisplay.innerText = `User: ${username}`;
    } else {
        alert("You must enter a username!");
    }
});

// Read chat log and display it in the chatbox
fs.readFile("chatlog.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    tb.innerHTML = data.replace(/\n/g, "<br>");
});

// Handle the "Send" button click event
sendbtn.addEventListener('click', () => {
    const message = document.getElementById("textbox").value;
    const username = user.value;

    if (message === "") {
        alert("You cannot send blank messages!");
    } else if (username === "") {
        alert("You must have a username!");
    } else if (message.toLowerCase().includes("n-word") || username.toLowerCase().includes("n-word")) {
        alert("NO RACISM BOI!");
    } else {
        const logMessage = `${username}: ${message}\n`;
        fs.appendFile("chatlog.txt", logMessage, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return;
            }
            tb.innerHTML += logMessage.replace(/\n/g, "<br>");
            document.getElementById("textbox").value = ""; // Clear the textbox
            alert('Message saved!');
        });
    }
});
