document.getElementById("emailWarning").style.display = "none";
document.getElementById("passWarning").style.display = "none";
document.getElementById("match").style.display = "none";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

const checkRegex = () => {
  let email = document.getElementById("userEmail").value;
  let password = document.getElementById("userPassword").value;
  let fullName = document.getElementById("fullName").value;
  let age = document.getElementById("age").value;
  let confirm = document.getElementById("confirm").value;
  console.log(email);
  let test = emailRegex.test(email);
  let passwordTest = passwordRegex.test(password);
  if (!test) {
    document.getElementById("emailWarning").style.display = "block";
    document.getElementById("userEmail").className =
      "text-danger border-danger form-control";
  } else if (!passwordTest) {
    document.getElementById("passWarning").style.display = "block";
  } else if (confirm != password) {
    document.getElementById("match").style.display = "block";
  } else if (
    email == "" ||
    password == "" ||
    fullName == "" ||
    age == "" ||
    confirm == ""
  ) {
    alert("all field is required");
  } else {
    window.location.href = "/myPexels.html";
  }
};
