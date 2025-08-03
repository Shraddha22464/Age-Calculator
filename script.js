function calculateAge() {
  let birthYear = document.getElementById("birthYear").value;
  let currentYear = new Date().getFullYear();

  if (birthYear === "") {
    document.getElementById("result").innerText = "Please enter your birth year.";
  } else {
    let age = currentYear - birthYear;
    document.getElementById("result").innerText = "You are " + age + " years old.";
  }
}
