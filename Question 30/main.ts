// Exercise no 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// Define array of usernames
let usernames = ["Admin", "Sheraz", "David", "Charli", "Daniyal"];

// Loop through the array
for (let i = 0; i < usernames.length; i++) {
  let username = usernames[i];

  // Check if the username is 'admin'
  if (username == "Admin") {
    console.log(`Hello admin, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}