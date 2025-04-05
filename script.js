//your JS code here. If required.
  const existingBtn = document.getElementById("existing");
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  // Show existing user button if credentials are saved
  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline";
  }

  // Handle form submission
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("checkbox").checked;

    alert(`Logged in as ${username}`);

    if (remember) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
  });

  // Handle "existing user" login
  existingBtn.addEventListener("click", function () {
    alert(`Logged in as ${savedUsername}`);
  });


