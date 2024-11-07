const files = require ('fs');
message = document.getElementById("textbox");
sendbtn = document.querySelector("#send");
tb = document.getElementsByClassName("chatbox");
userdisplay = document.getElementById("userdisplay");
user = document.getElementById("user");
const reader = new FileReader();

data = reader.readAsDataURL("chatlog.txt");
tb.innerHTML(data);
sendbtn.addEventListener('click', () => {
    if (message = ""){
        alert("you cannot send blank messages!");
    }else if (user = ""){
        alert("you must have a username!");
    }
    else if (message || user == "nigga" || message || user =="nigger") {
        alert ("NO RACISM BOI!");
    }
    else {
        files.appendFile("chatlog.txt",user+":"+message);
    }

})
