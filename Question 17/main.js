"use strict";
// Exercise no 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and 
// you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
//  only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
//  from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
//  have an empty list at the end of your program.
{
    let guestlist = ["Faraz", "Ramzan", "Waqar", "Sheraz", "Daniyal", "Salman"];
    console.log("Sorry, the new dinner table won't arrive on time. We can only invite two guests.");
    // In the below code i am removing guest  from guestlist one at a time, with message {Sorry, I can't invite you to dinner}.
    while (guestlist.length > 2) {
        let removedguestlist = guestlist.pop();
        console.log(`Sorry, ${removedguestlist}, I can't invite you to dinner.`);
    }
    // In the below code only two names remain in  guestlist, with message {Dear you are still invited to dinner}.
    for (let remainingguestlist of guestlist) {
        console.log(`Dear ${remainingguestlist}, You are still invited to dinner.`);
    }
    // In the below code i am Removing the last two names from guestlist.
    guestlist.splice(0, guestlist.length);
    console.log("Updated guest list:", guestlist);
}
