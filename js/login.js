function togglePassword() {
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (email === "" || password === "") {
        errorMsg.textContent = "Please fill all fields";
        return;
    }

    if (!email.includes("@")) {
        errorMsg.textContent = "Enter valid email";
        return;
    }

    // Demo login
    if (email === "admin@gmail.com" && password === "1234") {
        alert("Login Successful 🌸");
        window.location.href = "../index.html";
    } else {
        errorMsg.textContent = "Invalid credentials";
    }
});