function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Dummy credentials
  if (username === "Aniket Verma" && password === "270405") {
    window.location.href = "https://billybutcherfky.github.io/aniketverma/";
  } else {
    alert("Invalid Username or Password!");
  }
}