function validateForm(type) {
  let email = document.getElementById(type + "-email").value;
  let pass = document.getElementById(type + "-pass").value;

  if (email === "" || pass === "") {
    alert("Please fill all fields!");
    return false;
  }

  if (!email.includes("@")) {
    alert("Invalid Email!");
    return false;
  }

  alert(type === "reg" ? "Registration Successful!" : "Login Successful!");
  return true;
}
