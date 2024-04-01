"use strict";
// Exercise no 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
{
    // Here i am working on program number 14 to print a message indicating the number of people i am inviting to dinner.
    let guestlist = ["Ramzan", "Sheraz", "Shan"];
    for (let i = 0; i < guestlist.length; i++) {
        let guest = guestlist[i];
        console.log(`Hey ${guest}, you are cordially invited to dinner with me.`);
    }
    console.log(`Total number of guests invited to dinner: ${guestlist.length}`);
}
