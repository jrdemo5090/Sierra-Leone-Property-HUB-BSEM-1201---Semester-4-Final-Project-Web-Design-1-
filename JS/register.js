document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let nin = document.getElementById("nin").value;
    let district = document.getElementById("district").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // check password match
    if(password !== confirmPassword){
        alert("Passwords do not match!");
        return;
    }

    // user object
    let user = {
        fullname,
        email,
        phone,
        nin,
        district,
        password
    };

    // get existing users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check duplicate email
    let exists = users.find(u => u.email === email);

    if(exists){
        alert("User already exists!");
        return;
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    window.location.href = "login.html";
});