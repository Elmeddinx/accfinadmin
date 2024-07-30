if (document.body.id == "login-page") {
  function togglePassword() {
    const passwordInput = document.getElementById("passwordInput");
    const passwordToggle = document.querySelector(".toggle-password img");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.src = "./assets/icons/eye.png";
    } else {
      passwordInput.type = "password";
      passwordToggle.src = "./assets/icons/eye-hide.png";
    }
  }
}
