// This is just a example script template

let userName = prompt("Enter your username:");

let passWord = "TheMaster";

if (userName == 0) {
    window.alert("Canceled");

} else if (userName !== "admin") {
    window.alert("I don't know you");
}
else if (userName == "admin") {
    prompt("Enter your password");
}

else if (passWord == "TheMaster") {
    window.alert("Welcome!");
}
else if (passWord !== "TheMaster") {
    window.alert("Wrong password!");
}
else if (passWord == 0) {
    window.alert("Canceled");
}


