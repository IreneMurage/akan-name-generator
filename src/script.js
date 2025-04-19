// Run this when the form is submitted
document.getElementById("akan").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page from reloading

  // declaring the birthdate value
  const birthdate = document.getElementById("birthdate").value;
  console.log(birthdate);

  // declaring the selected gender
  const gender = document.querySelector('input[name="gender"]:checked');
  console.log(gender)

  // Check if date is filled
  if (birthdate === "") {
    alert("Please enter your birthdate.");
    return;
  }
  

  // Check if gender is selected
  if (gender === null) {
    alert("Please select your gender.");
    return;
  }

  // Split date into year, month, and day
  const parts = birthdate.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  // Validate month and day
  if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12.");
    return;
  }

  if (day < 1 || day > 31) {
    alert("Day must be between 1 and 31.");
    return;
  }

  // Get CC and YY from year
  const CC = Math.floor(year / 100);  // First two digits
  const YY = year % 100;              // Last two digits
  const MM = month;
  const DD = day;

  // Calculate day of the week using given formula
  let d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 * (MM + 1)) + DD) % 7;
  d = Math.floor((d + 7) % 7);  // Make sure it’s between 0-6

  // Akan names and days
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  // Choose Akan name based on gender
  let akanName = "";
  if (gender.value === "Male") {
    akanName = maleNames[d];
  } else if (gender.value === "Female") {
    akanName = femaleNames[d];
  }
  console.log(akanName)

  // Show the result
  const result = `You were born on a ${dayNames[d]}. Your Akan name is ${akanName}.`;
  document.getElementById("results").innerText = result;
});
