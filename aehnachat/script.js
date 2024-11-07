const fs = require('fs');
const setuser = document.querySelector("#senduser");
const sendbtn = document.querySelector("#send");
const tb = document.getElementsByClassName("chatbox")[0];
const userdisplay = document.getElementById("userdisplay");
const user = document.getElementById("user");
const reader = new FileReader();

setuser.addEventListener('click', () => {
    const username = user.value;
    userdisplay.innerText = `User: ${username}`;
});

fs.readFile("chatlog.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    tb.innerHTML = data.replace(/\n/g, "<br>");
});

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
