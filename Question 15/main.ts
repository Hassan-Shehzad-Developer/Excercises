// Exercise no 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need
//  to send out a new set of invitations. You’ll have to think of someone else to invite.

{
    // Old Guest List
  let guestlist = ["Ramzan", "Sheraz", "Shan"];
  console.log("Guest List");

  for (let i = 0; i < guestlist.length; i++) {
 console.log(`Hey ${guestlist[i]}, you are cordially invited to dinner with me.`);
  }

  console.log(`unfortunatly ${guestlist[2]} wil not come in dinner due to some reason`);

//   New Updated Guest List

console.log("New Update Guest List");

guestlist[2]= "Daniyal";
for (let i = 0; i < guestlist.length; i++) {
    
    console.log(`Hey ${guestlist[i]}, you are cordially invited to dinner with me.`);

}
}

