document.addEventListener("DOMContentLoaded", function () {
    const validUser = "admin";
    const validPassword = "1234";
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (username === validUser && password === validPassword) {
        alert("Inicio de sesión exitoso.");
        
        window.location.href = "apis.html";
      } else {
        errorMessage.style.display = "block"; 
      }
    });
  
    
    usernameInput.addEventListener("input", function () {
      errorMessage.style.display = "none";
    });
    passwordInput.addEventListener("input", function () {
      errorMessage.style.display = "none";
    });
  });
  