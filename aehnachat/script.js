const files = require('fs');
const setuser = document.querySelector("#senduser");
const sendbtn = document.querySelector("#send");
const tb = document.getElementsByClassName("chatbox")[0];
const userdisplay = document.getElementById("userdisplay");
const user = document.getElementById("user");
const reader = new FileReader();

setuser.addEventListener('click', () => {
    const message = document.getElementById("textbox").value;
});

reader.readAsDataURL("chatlog.txt");
reader.onload = function() {
    const data = reader.result;
    tb.innerHTML = data;
};

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
        files.appendFile("chatlog.txt", `${username}: ${message}`, (err) => {
            if (err) throw err;
            console.log('Message saved!');
        });
    }
});
