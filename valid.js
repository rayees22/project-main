let name = document.getElementById("Name")
let username = document.getElementById("User_name")
let email = document.getElementById("email")
let Password = document.getElementById("Password")
let conPassword = document.getElementById("con_password")

let nameValue = document.getElementById("nameValue")
let userValue = document.getElementById("userValue")
let emailValue = document.getElementById("emailValue")
let passValue = document.getElementById("passValue")
let conpassValue = document.getElementById("conpassValue")


function formValue() {
    let isvalid = true;
    if (name.value === "") {
        nameValue.textContent = "Please enter your full name";
        isvalid = false;

    } else {
        nameValue.textContent = "";
    }

    if (User_name.value === "") {
        userValue.textContent = "please enter your user name";
        isvalid = false;

    } else {
        userValue.textContent = "";
    }

    if (email.value.includes("@")) {
        emailValue.textContent = "";

    } else {
        emailValue.textContent = "please enter your email "
        isvalid = false;
    }

    if (Password.value === "") {
        passValue.textContent = "please enter your password"
        isvalid = false;
    } else if (Password.value.length < 8) {
        passValue.textContent = "password value must be a least 8 character"
        isvalid = false;
    } else {
        passValue.textContent = "";
    }

    if (conPassword.value === "") {
        conpassValue.textContent = "please enter confirm password";
        isvalid = false;
    } else if (Password.value.length < 8) {
        passValue.textContent = "Password must be at least 8 characters";
        isvalid = false;
    } else if (Password.value !== conPassword.value) { // Fix: Compare with conPassword.value, not conpassValue.value
        conpassValue.textContent = "password do not match";
        isvalid = false;
    } else {
        conpassValue.textContent = "";
    }
    if (isvalid) {  // should match the variable name you've been using
        setTimeout(() => {
            alert("Register successful!");
        }, 1000);
    }



}


