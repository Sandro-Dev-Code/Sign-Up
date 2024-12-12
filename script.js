let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector(".signUp-btn");


btn.addEventListener('click', function () {
    if (fname.value === "") {
        fname.style.border = "2px solid red";
        fname.placeholder = "First name is required";
    } else {
        fname.style.border = "2px solid green";
        fname.placeholder = "";
    }
});

btn.addEventListener('click', function () {
    if (lname.value === "") {
        lname.style.border = "2px solid red";
        lname.placeholder = "Last name is required";
    } else {
        lname.style.border = "2px solid green";
        lname.placeholder = "";
    }
});

btn.addEventListener('click', function () {
    let emailValue = email.value;

    // Basic checks for email structure
    if (!emailValue.includes("@") || !emailValue.includes(".") || emailValue.indexOf("@") === 0 || emailValue.lastIndexOf(".") < emailValue.indexOf("@") + 2 || emailValue.endsWith(".")) {
        email.style.border = "2px solid red";
        email.placeholder = "Enter a valid email address";
    } else {
        email.style.border = "2px solid green";
        email.placeholder = "";
    }
});


btn.addEventListener('click', function () {
    if (password.value === "") {
        password.style.border = "2px solid red";
        password.placeholder = "Password is required";
    } else if (password.value < "6") { // Check if the value is not exactly "6"
        password.style.border = "2px solid red";
        password.placeholder = "Password must be more then 6 letters";
    } else {
        password.style.border = "2px solid green";
        password.placeholder = "";
    }
});

