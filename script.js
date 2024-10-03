// Daftar akun
const accounts = JSON.parse(localStorage.getItem("accounts")) || [{ username: "admin", password: "admin123" }];

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registrationForm = document.getElementById("registrationForm");

    // Login
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" || password === "") {
            alert("Silakan isi kedua kolom.");
            return;
        }

        const account = accounts.find(acc => acc.username === username && acc.password === password);
        if (account) {
            alert("Login berhasil! Mengarahkan ke menu...");
            window.location.href = "menu.html";
        } else {
            alert("Username atau password tidak valid. Silakan coba lagi.");
        }
    });

    // Registrasi
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;

        if (newUsername === "" || newPassword === "") {
            alert("Silakan isi kedua kolom.");
            return;
        }

        const existingAccount = accounts.find(acc => acc.username === newUsername);
        if (existingAccount) {
            alert("Username sudah digunakan. Silakan coba username lain.");
            return;
        }

        accounts.push({ username: newUsername, password: newPassword });
        localStorage.setItem("accounts", JSON.stringify(accounts)); // Simpan akun di localStorage
        alert("Registrasi berhasil! Silakan login.");
        registrationForm.reset();
    });
});