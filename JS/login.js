const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let valid = true;

    document
        .querySelectorAll(".error-message")
        .forEach(error => error.textContent = "");

    if (email.value.trim() === "") {
        email.nextElementSibling.textContent =
            "Please enter your email address.";
        valid = false;
    }

    else if (!email.value.includes("@")) {
        email.nextElementSibling.textContent =
            "Please enter a valid email address.";
        valid = false;
    }

    if (password.value.trim() === "") {
        password.nextElementSibling.textContent =
            "Please enter your password.";
        valid = false;
    }

    if (valid) {

        // Backend integration later
        window.location.href = "home.html";

    }

});