const form = document.getElementById("myForm");
// Custom validation for password matching
function validateForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("error-message").innerHTML =
      "Error: Passwords do not match.";
    event.preventDefault();
    event.stopPropagation();
    return;
  } else {
    document.getElementById("error-message").innerHTML = "";
  }
  if (form.checkValidity() === false) {
    // document.getElementById("error-message").innerHTML = "All";
    event.preventDefault();
    event.stopPropagation();
  } else {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    pushToLocal(name,email,password);
    window.location.href = "profile.html";
  }
  form.classList.add("was-validated");
}

function pushToLocal(name,email,pass){
    let data = {
       "name":name,
        "email":email,
        "token":0,
        "password":pass
    }
    let jsonData = JSON.stringify(data);
    localStorage.setItem("userData",jsonData);
}

