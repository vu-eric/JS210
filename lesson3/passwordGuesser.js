const PASSWORD = "password";

for (i = 1; i <= 3; i++) {
  let guess = prompt("What is the password: ");
  if (guess === PASSWORD) {
    console.log("You have successfully logged in.");
    break;
  }

  if (i === 3) {
    console.log("You have been denied access.");
  }
}
